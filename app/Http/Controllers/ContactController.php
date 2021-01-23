<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Get latest contacts first
     * @return JsonResponse
     */
    public function getContacts(): JsonResponse
    {
        return response()->json(Contact::latest()->get());
    }

    /**
     * Get oldest contacts first
     * @return JsonResponse
     */
    public function getOldestContacts(): JsonResponse
    {
        return response()->json(Contact::oldest()->get());
    }

    /**
     * Stores contact that was send by user
     * @param Request $request
     * @return JsonResponse
     */
    public function sendContact(Request $request): JsonResponse
    {
        // Checks if some of the data is missing
        if(!$request->filled(['name', 'email', 'message'])){
            abort(403, "Nekateri podatki manjkajo!");
        }

        $request->validate([
            'email' => 'email'
        ]);

        Contact::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'message' => $request->input('message')
        ])->save();

        return response()->json("Kontakt je bil uspešno poslan!");

    }

}
