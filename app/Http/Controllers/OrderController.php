<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Http\Resources\OrderUiidResource;
use App\Item;
use App\Mail\orderConfirmed;
use App\Mail\orderDelayed;
use App\Mail\orderDenied;
use App\Mail\orderReceived;
use App\Order;
use App\OrderUiid;
use App\User;
use PayPalCheckoutSdk\Core\ProductionEnvironment;
use PDF;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

// Paypal
use PayPalCheckoutSdk\Core\PayPalHttpClient;
use PayPalCheckoutSdk\Orders\OrdersCreateRequest;

class OrderController extends Controller
{
    protected PayPalHttpClient $client;
    public bool $isGuest;
    public string $price;

    public function __construct()
    {
        $clientId = env('PAYPAL_LIVE_CLIENT_ID');
        $clientSecret = env('PAYPAL_LIVE_CLIENT_SECRET');

        $env = new ProductionEnvironment($clientId, $clientSecret);
        $client = new PayPalHttpClient($env);
        $this->client = $client;
    }

    /**
     * Function will calculate full price of an order for logged in user and return it
     * @param int $id
     * @return string
     */
    public function fullPriceOfAnOrder(int $id): string
    {
        $price = 0;

        // It gets items prices and quantity,
        // and calculates them and adds them to price variable,
        // that is returned at the end
        $items = Cart::where('userId', $id)->with('price')->get();
        foreach ($items as $item) {
            $price += $item->price->itemPrice * $item->quantity;
        }
        return strval($price);
    }

    /**
     * Function will calculate full price of an order for guest and return it
     * @param $items
     * @return string
     */
    public function fullPriceOfAnOrderGuest($items): string
    {
        $fullPrice = 0;
        foreach ($items as $item) {
            $fullPrice += $item['items']['itemPrice'] * $item['quantity'];
        }
        return strval($fullPrice);
    }

    /**
     * Creates an order for PayPal
     * @param Request $request
     * @return JsonResponse
     */
    public function createOrder(Request $request): JsonResponse
    {
        $token = $request->get('token');
        $user = User::where(['token' => $token])->first();

        $this->isGuest = $user->isGuest ? true : false;

        if ($this->isGuest) {
            $this->price = $this->fullPriceOfAnOrderGuest($request->input('cart'));
        } else {
            $this->price = $this->fullPriceOfAnOrder($user->id);
        }

        $request = new OrdersCreateRequest();

        $request->prefer('return=representation');
        $request->body = [
            "intent" => "CAPTURE",
            "purchase_units" => [[
                "amount" => [
                    "value" => $this->price,
                    "currency_code" => "EUR"
                ]
            ]],
            "application_context" => [
                "cancel_url" => "https://example.com/cancel",
                "return_url" => "https://example.com/return"
            ]
        ];

        return response()->json(
            $this->client->execute($request),
        );
    }

    /**
     * Creates invoice pdf and returns it
     * @param string $UUID
     * @return mixed
     */
    public function createPDF(string $UUID)
    {
        #                67f742b7-4515-4a96-9adc-24aa4515c395
        // I don't know why it wont work, I know it ugly but is works
        $order = Order::where('UUID', $UUID)->with('items')->get();
        $user = OrderUiid::where('UUID', $UUID)->with('user')->first();
        return PDF::loadView('mails.orderSendPDF',  ["items" => $order, "user" => $user]);
        #return $pdf->loadView('mails.orderSendPDF', ["items" => $order, "user" => $user]);
    }
    /**
     * Adds order to database
     * @param Request $request
     * @return JsonResponse
     */
    public function executePayment(Request $request): JsonResponse
    {
        (string)$token = $request->input('token');
        (string)$UUID = Str::uuid();

        $token = $request->get('token');
        $user = User::where(['token' => $token])->first();

        // Sets is user is guest
        $this->isGuest = $user->isGuest ? true : false;

        // Creates order UUID
        OrderUiid::create([
            "UUID" => $UUID,
            "userId" => $user->id,
            'typeOfPayment' => $request->input('typeOfPayment'),
            'status' => 'not-reviewed',
            'paymentStatus' => $request->input('typeOfPayment') == 'prepaid'
        ])->save();

        // Loop through items in cart and add them to order table
        if (!$this->isGuest) {
            $items = Cart::where('userId', $user->id)->with('price')->get();
            foreach ($items as $item) {
                Order::create([
                    'UUID' => $UUID,
                    'itemId' => $item->itemId,
                    'quantity' => $item->quantity,
                ]);
            }

            // Subtract from item quantity
            foreach ($items as $item) {
                Item::find($item->itemId)->decrement('quantity', $item->quantity);
            }

            // Deletes cart of a user after order was sent
            Cart::where('userId', $user->id)->delete();
        } else {
            // Loops through cart (request)
            $items = $request->get('cart');
            // Gets itemId and quantity and stores it to database
            foreach ($items as $item) {

                // Checks if item was found or not
                if(Item::find($item["items"]["id"]) == null){
                    abort(403, "Item in cart was not found");
                }

                Order::create([
                    'UUID' => $UUID,
                    'itemId' => $item["items"]["id"],
                    'quantity' => $item["quantity"]
                ]);

                // Then decrements the value
                Item::find($item["items"]["id"])->decrement('quantity', $item["items"]["quantity"]);
            }
        }

        Mail::to($user->email)->send(new orderReceived(
            $user->Name,
            $user->Surname,
            $this->createPDF($UUID)
        ));

        return response()->json([
            "message" => "Order was sent!",
        ]);
    }

    /**
     * Returns all orders, items assign to it and user
     * @return JsonResponse
     */
    public function getOrders(): JsonResponse
    {
        return response()->json(
            OrderUiidResource::collection(OrderUiid::all())
        );
    }

    /**
     * return all complete orders
     * @return JsonResponse
     */
    public function complete(): JsonResponse
    {
        return response()->json(
            OrderUiidResource::collection(OrderUiid::where(['status' => 'confirmed'])->orWhere('status', 'denied')->get())
        );
    }

    /**
     * Returns all order that are not complete
     * @return JsonResponse
     */
    public function notComplete(): JsonResponse
    {
        return response()->json(
            OrderUiidResource::collection(OrderUiid::where('status', 'not-reviewed')->orWhere( 'status', 'delayed')->get())
        );
    }

    /**
     * Gets latest orders
     * @return JsonResponse
     */
    public function latestOrders(): JsonResponse
    {
        return response()->json(
            OrderUiidResource::collection(OrderUiid::where('status', 'not-reviewed')->orWhere( 'status', 'delayed')->get()->sortDesc())
        );
    }

    /**
     * Gets oldest orders
     * @return JsonResponse
     */
    public function oldestOrders(): JsonResponse
    {
        return response()->json(
            OrderUiidResource::collection(OrderUiid::where('status', 'not-reviewed')->orWhere( 'status', 'delayed')->get()->sortBy(['Created_at']))
        );
    }

    /**
     * Confirms order
     * @param int $id
     * @return JsonResponse
     */
    public function confirmOrder(int $id): JsonResponse
    {
        // Finds correct order and updates it
        $order = OrderUiid::find($id);
        $order->update([
            "status" => "confirmed"
        ]);

        // Finds user
        $user = User::find($order->userId);

        // Sends email to client after confirmation
        Mail::to($user->email)->send(new orderConfirmed(
            $user->Name,
            $user->Surname,
            $user->houseNumberAndStreet,
            $user->Postcode
        ));

        // Returns response
        return response()->json([
            "message" => "Order confirmed"
        ]);
    }

    /**
     * Deny order
     * @param int $id
     * @return JsonResponse
     */
    public function denyOrder(int $id): JsonResponse
    {
        $order = OrderUiid::find($id);

        $order->update([
            "status" => "denied"
        ]);

        Mail::to(User::find($order->userId)->email)->send(new orderDenied());

        return response()->json([
            "message" => "Order denied!"
        ]);
    }

    public function delayOrder(int $id): JsonResponse
    {
        $order = OrderUiid::find($id);

        $order->update([
            "status" => "delayed"
        ]);

        Mail::to(User::find($order->userId)->email)->send(new orderDelayed());

        return response()->json(
            "item was delayed"
        );
    }
}
