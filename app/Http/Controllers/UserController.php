<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderUiidResource;
use App\OrderUiid;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    /**
     * Changes basic user information
     * @param Request $request
     * @return JsonResponse
     */
    public function changeUserDataBasics(Request $request): JsonResponse
    {
        if (!$request->filled(['name', 'surname', 'phone'])) {
            abort(400, "Nekaj podatkov manjka");
        }

        $user = Auth::user();

        $user::where('id', Auth::id())
            ->update(["name" => $request->input('name'),
                "surname" => $request->input('surname'),
                "Telephone" => $request->input('phone')
            ]);

        return response()->json("Data was updated!");
    }

    public function changeUserDataResidence(Request $request): JsonResponse
    {
        if (!$request->filled(['houseNumberAndStreet', 'postcode'])) {
            abort(400, "Nekaj podatkov manjka");
        }

        $user = Auth::user();

        $user::where('id', Auth::id())
            ->update([
                "houseNumberAndStreet" => $request->input('houseNumberAndStreet'),
                "postcode" => $request->input('postcode'),
            ]);
        return response()->json("Data was updated!");
    }

    /**
     * Gets all User order history
     * @return JsonResponse
     */
    public function getUserOrderHistory(): JsonResponse
    {
        return response()->json(
            OrderUiidResource::collection(OrderUiid::where(
                ['status' => 'confirmed', 'userId' => Auth::id()]
            )->get())
        );
    }
}
