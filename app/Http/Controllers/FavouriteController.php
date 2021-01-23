<?php

namespace App\Http\Controllers;

use App\Favourite;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class FavouriteController extends Controller
{
    /**
     * Selects all favourites from database for specific user
     * @return JsonResponse
     */
    public function getFavourites(): JsonResponse
    {
        return response()->json(
            Favourite::where('usersId', Auth::id())->with('items')->get()
        );
    }

    /**
     * Adds favourites record to database
     * @param int $id
     * @return JsonResponse
     */
    public function addToFavourites(int $id): JsonResponse
    {
        // Checks if item already exists in favourites
        if (Favourite::where(['usersId' => Auth::id(), "itemsId" => $id])->count() > 0) {
            $id = Favourite::where(['usersId' => Auth::id(), "itemsId" => $id])->first();
            Favourite::destroy($id->id);
            return response()->json([
                "responseText" => "Item removed from favourites!",
                "favourites" => Favourite::where('usersId', Auth::id())->get()
            ]);
        }

        // Adds item if item doesn't exists in favourites
        Favourite::create([
            "usersId" => Auth::id(),
            "itemsId" => $id
        ])->save();

        return response()->json([
            "responseText" => "Item added to favourites!",
            "favourites" => Favourite::where('usersId', Auth::id())->get()
        ]);
    }
}
