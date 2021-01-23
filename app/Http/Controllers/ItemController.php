<?php

namespace App\Http\Controllers;

use App\Item;
use App\ItemReview;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ItemController extends Controller
{


    /**
     * READE ME
     * Image naming convention for primary image and images is
     * IMAGES - picture-index-name
     * PRIMARY IMAGE - picture-PI-name
     */

    /**
     * Crates folder and uploads images to it,
     * if folder already exists it return error
     * @param $images
     * @param $name
     * @param $primaryImage
     */
    public function uploadImageAndCreateFolder($images, $name, $primaryImage)
    {
        if (Storage::exists('/public/products/' . $name)) {
            abort(403, "Directory already exists!");
        }

        // Inserts primary image
        $primaryImage->storeAs('/public/products/' . $name, "picture-PI-" . $name . ".jpg");

        // Creates folder
        Storage::makeDirectory('/public/products/' . $name);
        foreach ($images as $index => $image) {
            if ($image != $primaryImage) {
                $image->storeAs('/public/products/' . $name, "picture-" . $index . "-" . $name . ".jpg");
            }
        }
    }

    /**
     * Adds item to database
     * @param Request $request
     * @return JsonResponse
     */
    public function addItem(Request $request): JsonResponse
    {
        // Checks if any data is missing
        if (
            !$request->input('itemName') ||
            !$request->input('itemPrice') ||
            !$request->input('dimensions') ||
            !$request->input('category') ||
            !$request->input('quantity') ||
            !$request->input('color') ||
            !$request->input('itemDescription')

        ) {
            abort(400, "Some of the data is missing");
        }

        // Checks if images are inserted and if primary image is selected
        if (!$request->hasFile('primaryImage') || !$request->hasFile('images')) {
            abort(400, "Either primary image or images are missing!");
        }

        // Creates item and stores it
        $item = Item::create([
            "itemName" => $request->input('itemName'),
            "itemImg" => "picture-PI-" . $request->input('itemName') . ".jpg",
            "itemImgDir" => '/products/' . $request->input('itemName'),
            "itemPrice" => $request->input('itemPrice'),
            "itemDescription" => $request->input('itemDescription'),
            "quantity" => $request->input('quantity'),
            "categories" => $request->input('category'),
            "colors" => $request->input('color'),
            "dimensions" => $request->input('dimensions'),
            "defaultItemPrice" => $request->input('itemPrice')
        ])->save();

        if ($item) {
            $this->uploadImageAndCreateFolder(
                $request->file('images'),
                $request->input('itemName'),
                $request->file('primaryImage')
            );
        }

        return response()->json("Item was created");
    }

    /**
     * Get all items
     * @return JsonResponse
     */
    public function getItems(): JsonResponse
    {
        return response()->json(Item::all());
    }

    /**
     * Returns all items for a customer
     * @return JsonResponse
     */
    public function getItemsCustomer(): JsonResponse
    {
        return response()->json(Item::where([
            'delisted' => 0,
        ])->get());
    }


    /**
     * Changes item price and default item price
     * It could be done in changeItem part but there was to much logic involved so I moved it to
     * separate function.
     * @param int $id
     * @param int $price
     * @param bool $isOnSale
     * @param int $discount
     */
    public function changeItemPrice(int $id, int $price, bool $isOnSale, int $discount)
    {
        // Item object
        $item = Item::find($id);

        // If item was set to IsOnSale then it changes item price to discount price
        if($isOnSale && $item->isOnSale == false){
            $item->update([
                "itemPrice" => (int)$price - (($discount * $price) / 100)
            ]);
        }
        else if(!$isOnSale && $item->isOnSale){
            $item->update([
                "itemPrice" => $item->defaultItemPrice
            ]);
        }
        else if(!$isOnSale && $item->isOnSale == false && ($price == $item->defaultItemPrice || $price != $item->defaultItemPrice)){
            $item->update([
                "defaultItemPrice" => $price,
                "itemPrice" => $price
            ]);
        }
    }

    /**
     * Changes item data
     * @param integer $id
     * @param Request $request
     * @return JsonResponse
     */
    public function changeItem(Request $request, int $id): JsonResponse
    {
        $item = Item::find($id);

        // Checks if data is missing
        if (!$request->filled('itemPrice', 'itemName', 'quantity', 'itemDescription', 'isOnSale', 'discount')) {
            abort(403, "Some data is missing!");
        }

        /*
         * If name of the item was changes it checks if directory with that name already exists,
         */
        if (!Storage::exists('/public/products/' . $request->input('itemName'))) {
            Storage::move('/public/' . $item->itemImgDir, '/public/products/' . $request->input('itemName'));
            Storage::move(
                '/public/products/' . $request->input('itemName') . '/' . $item->itemImg,
                '/public/products/' . $request->input('itemName') . '/picture-PI-' . $request->input('itemName') . '.jpg'
            );
        }

        // Changes item price
        $this->changeItemPrice(
            $id,
            $request->input('itemPrice'),
            $request->input('isOnSale'),
            $request->input('discount')
        );

        // Updates table
        Item::where('id', $id)->update([
            "itemName" => $request->input('itemName'),
            "quantity" => $request->input('quantity'),
            "itemImgDir" => "/products/" . $request->input('itemName'),
            "itemImg" => "picture-PI-" . $request->input('itemName') . ".jpg",
            "itemDescription" => $request->input('itemDescription'),
            "isOnSale" => $request->input('isOnSale') == false ? 0 : 1,
            "discount" => $request->input('discount'),

            /*"defaultItemPrice" => $request->input('itemPrice') == $item->defaultItemPrice && $request->input('isOnSale') == false ?
                $item->defaultItemPrice : $request->input('itemPrice'),

            "itemPrice" => $request->input('isOnSale') == false ? $price :
                (int)$request->input('itemPrice') - (($request->input('discount') * $request->input('itemPrice')) / 100)*/
        ]);

        // Sends response
        return response()->json("Item was successfully updated");
    }

    /**
     * Searches for items
     * @param Request $request
     * @return JsonResponse
     */
    public function searchForItems(Request $request): JsonResponse
    {
        return response()->json(
            Item::where('itemName', 'LIKE', "%{$request->input('data')}%")->get()
        );
    }

    /**
     * Get all categories
     * @return JsonResponse
     */
    public function getCategories(): JsonResponse
    {
        return response()->json(
            Item::where(['delisted' => 0])->distinct('categories')->get('categories')
        );
    }

    /**
     * Gets selected item by id
     * @param int $id
     * @return JsonResponse
     */
    public function getItem(int $id): JsonResponse
    {
        $item = Item::findOrFail($id);

        return response()->json([
            "item" => Item::find($id),
            "images" => Storage::disk('public')->allFiles($item->itemImgDir)
        ]);
    }

    /**
     * Gets all reviews for specific item
     * @param int $id
     * @return JsonResponse
     */
    public function getReviews(int $id): JsonResponse
    {
        return response()->json(ItemReview::where('itemsId', $id)->with('user')->get());
    }

    /**
     * Returns all items of given category and 10 per page
     * @param int $page
     * @param int $categoryId
     * @return JsonResponse
     */
    public function getItemsPerCategoryPerPage(int $page, int $categoryId): JsonResponse
    {
        return response()->json(
            Item::where('category', $categoryId)->paginate(10)
        );
    }

    /**
     * Adds review to item
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function addReview(Request $request, int $id): JsonResponse
    {
        // Checks if all of the data is provided
        if (!$request->filled(['rating', 'comment'])) {
            abort(400, "Some of the data is missing!");
        }

        // Checks if user already gave a review on the item
        if (ItemReview::where('userId', Auth::id())->count() > 0) {
            abort(400, "You already commented!");
        }

        // Inserts new review to database
        ItemReview::create([
            "userId" => Auth::id(),
            "itemsId" => $id,
            "rating" => $request->input('rating'),
            "comment" => $request->input('comment')
        ])->save();

        // Calculates and update overall rating
        $item = Item::find($id);
        $itemReviewSum = ItemReview::where('itemsId', $id)->sum('rating');
        $itemReviewCount = ItemReview::where('itemsId', $id)->count();
        $newRating = ($itemReviewSum) / ($itemReviewCount);

        $item->update(['OverallRating' => $newRating]);

        return response()->json("New rating added!");
    }

    /**
     * Get items for specific category
     * @param Request $request
     * @return JsonResponse
     */
    public function getSpecificItems(Request $request): JsonResponse
    {
        return response()->json(
            Item::where('categories', $request->input('category'))->get()
        );
    }

    /**
     * Get all delisted items
     * @return JsonResponse
     */
    public function delistedItems(): JsonResponse
    {
        return response()->json(Item::where('delisted', 1)->get());
    }

    /**
     * Gets all listed items
     * @return JsonResponse
     */
    public function listedItems(): JsonResponse
    {
        return response()->json(Item::where('delisted', 0)->get());
    }

    /**
     * Change item status (delisted, listed)
     * @param int $id
     * @return JsonResponse
     */
    public function changeStatus(int $id): JsonResponse
    {
        $item = Item::find($id);
        $item->update(['delisted' => !$item->delisted]);

        return response()->json([
            "message" => "Item was successfully changed!"
        ]);
    }
}
