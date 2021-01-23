<?php

namespace App\Http\Controllers;

use App\Item;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Cart;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{

    /**
     * Checks if quantity is bigger than stock and if item is still listed
     * @param Request $request
     * @return JsonResponse
     */
    public function checkCartGuest(Request $request): JsonResponse
    {
        $cart = $request->input('cart');
        $items = [];

        foreach ($cart as $item){
            // Checks if quantity is bigger than stock
            if($item["items"]["quantity"] < $item["quantity"]){
                $item["quantity"] = $item["items"]["quantity"];
            }

            // Checks if item is listed
            if($item["items"]["delisted"] == 0){
                array_push($items, $item);
            }
        }
        return response()->json(
           $items
        );
    }
    /**
     * Returns cart of registered user
     * @return JsonResponse
     */
    public function getCart(): JsonResponse
    {
        $cart = Cart::where(['userId' => Auth::id()])->with('items')->get();
        (array)$items = [];

        foreach ($cart as $item) {
            // Checks if item is in stock and if item is listed
            if ($item->items != null && $item->items->quantity > 0 && $item->items->delisted == 0) {
                array_push($items, $item);
            }
        }
        return response()->json(
            $items
        );
    }


    /**
     * Deletes item from cart for specific user
     * @param int $id
     * @return JsonResponse
     */
    public function deleteFromCart(int $id): JsonResponse
    {
        $item = Cart::where(['userId' => Auth::id(), "itemId" => $id])->first();
        Cart::destroy($item->id);

        return response()->json([
            "Item successfully deleted!"
        ]);
    }

    /**
     * Adds new item to cart
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function addItemToCart(Request $request, int $id): JsonResponse
    {
        // Checks if all the data was provided
        if (!$request->filled('quantity')) {
            abort(400, "Some of the data is missing!");
        }

        // Checks if item was already added
        if (Cart::where(['userId' => Auth::id(), "itemId" => $id])->count() > 0) {
            Cart::where(['userId' => Auth::id(), "itemId" => $id])->delete();
            return response()->json("Item was deleted");
        }

        // Inserts new cart to database
        Cart::create([
            'quantity' => $request->input('quantity'),
            'userId' => Auth::id(),
            'itemId' => $id
        ])->save();

        return response()->json("Item added to cart!");
    }

    /**
     * Change quantity of given item with custom value
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function changeQuantityCustom(Request $request, int $id): JsonResponse
    {
        $user = User::where('token', $request->input('token'))->first();
        $cart = $request->input('cart');

        // Guest user
        if($user === null){
            foreach ($cart as $item){
                // Checks if quantity is bigger than stock of an item
                if($item["items"]["id"] == $id && $item["items"]["quantity"] < $request->input('quantity')){
                    return response()->json([
                        'id' => $id,
                        'quantity' => $item["items"]["quantity"]
                    ]);
                }
            }
        }
        // Logged in user
        else{
            // Checks if given custom quantity is larger than stock quantity
            if (Item::find($id)->quantity < $request->input('quantity')) {
                Cart::where(['userId' => $user->id, 'itemId' => $id])->update(['quantity' => Item::find($id)->quantity]);
                return response()->json([
                    'id' => $id,
                    'quantity' => Item::find($id)->quantity
                ]);
            }

            // Runs this if statement if quantity is bigger than 1
            if ($request->input('quantity') >= 1) {
                Cart::where(['userId' =>$user->id, 'itemId' => $id])->update(['quantity' => $request->input('quantity')]);
            }
        }

        return response()->json($request->input("Item was updated!"));
    }


    /**
     * Changes quantity of given item for specific user in cart
     * @param Request $request
     * @param int $id item id
     * @return JsonResponse
     */
    public function changeQuantity(Request $request, int $id): JsonResponse
    {
        if (!$request->filled('quantity')) {
            abort(400, "Some of the data is missing!");
        }

        $item = Cart::where(['userId' => Auth::id(), 'itemId' => $id])->first();

        if ($request->input('quantity') == 1) {
            if (Item::find($id)->quantity > $item->quantity) {
                Cart::where(['userId' => Auth::id(), 'itemId' => $id])->increment('quantity');
            }
        } else if ($request->input('quantity') == -1) {
            if ($item->quantity - 1 <= 0) {
                return response()->json("Can't set it to 0 or lower!");
            } else {
                Cart::where(['userId' => Auth::id(), 'itemId' => $id])->decrement('quantity');
            }
        }
        return response()->json($request->input("Item was updated!"));
    }
}
