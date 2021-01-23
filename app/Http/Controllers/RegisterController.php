<?php

namespace App\Http\Controllers;

use App\Mail\SetPasswordMail;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;


class RegisterController extends Controller
{
    /**
     * Checks if email is already registered
     * @param string $email
     * @return bool
     */
    public function checkEmail(string $email): bool
    {
        $checkForEmail = User::where([
            'Email' => $email,
            'isGuest' => 0
        ])->count();

        if ($checkForEmail == 1) {
            return false;
        }
        return true;
    }

    /**
     * Registers user
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request): JsonResponse
    {
        $token = Hash::make(Str::random(40));

        // Checks if all the data was provided
        if (!$request->filled(['email', 'name', 'surname', 'phone'])) {
            abort(403, "Nekaj podatkov manjka!");
        }

        // Calls function to check if email was already registerd
        if (!$this->checkEmail($request->input('email'))) {
            abort(400, "E-naslov je že registriran!");
        }

        // Prepares to add new data to database
        $user = User::create([
            "name" => $request->input('name'),
            "surname" => $request->input('surname'),
            "email" => $request->input('email'),
            "Telephone" => $request->input('phone'),
            "isAuth" => false,
            "isGuest" => false,
            "isNewCustomer" => true,
            "token" => $token
        ]);

        // Data is saved into database
        $user->save();

        Mail::to(
            $request->get('email'))->send(new SetPasswordMail(
            $request->get('name'),
            $request->get('surname'),
            $token
        ));
        // And response is sent
        return response()->json(
            "Na vaš e-naslov smo poslali link do nastavitve gesla!"
        );
    }

    /**
     * Update authenticated user's missing data
     * @param Request $request
     * @return JsonResponse
     */
    public function updateCredentials(Request $request): JsonResponse
    {
        if (!$request->filled(['houseNumberAndStreet', 'postcode'])) {
            abort(400, "Some of the data is missing!");
        }

        $user = User::find(Auth::id());


        $user->update([
            "houseNumberAndStreet" => $request->input('houseNumberAndStreet'),
            "Postcode" => $request->input('postcode'),
            'isNewCustomer' => 0
        ]);

        return response()->json(
            $user
        );
    }

    /**
     * Register guest user
     * @param Request $request
     * @return JsonResponse
     */
    public function registerGuest(Request $request): JsonResponse
    {
        // Checks if some credentials are missing
        if (!$request->filled(['name', 'surname', 'email', 'Telephone', 'houseNumberAndStreet', 'Postcode'])) {
            abort(403, "Nekaj podatkov manjka!");
        }

        // Creates user
       $user = User::create([
            "name" => $request->input('name'),
            "surname" => $request->input('surname'),
            "email" => $request->input('email'),
            "Telephone" => $request->input('Telephone'),
            "isAuth" => true,
            "isGuest" => true,
            "isNewCustomer" => false,
            "houseNumberAndStreet" => $request->input('houseNumberAndStreet'),
            "Postcode" => $request->input('Postcode'),
            "token" => Hash::make(Str::random(40))
        ]);

        $user->save();

        // Returns response
        return response()->json([
           "guest" => User::find($user->id)
        ]);
    }

    /**
     * Set password
     * @param Request $request
     * @return JsonResponse
     */
    public function setPassword(Request $request): JsonResponse
    {
        // Checks if all of the data was provided
        if (!$request->filled(['password', 'token'])) {
            abort(400, "Some of the data is missing!");
        }

        // Updates the user password and other data
        User::where(['token' => $request->input('token')])
            ->update(
                [
                    'password' => Hash::make($request->input('password')),
                    'isAuth' => true,
                    'isGuest' => false,
                    'isNewCustomer' => true
                ]
            );

        // Authenticates user

        $credentials = [
            'Email' =>  User::select('Email')->where(['token' => $request->input('token')])->first()->Email,
            'password' => $request['password']
        ];
        Auth::attempt($credentials);

        // Return response
        return response()->json([
            "token" => Auth::user()->createToken('accessToken')->accessToken
        ]);
    }

    /**
     * Check if token is valid
     * @param Request $request
     * @return bool
     */
    public function checkIfPasswordSet(Request $request): bool
    {
        $token = $request->input('token');
        $user = User::where(['token' => $token])->get();

        // Check if token exists and if password was already set
        if (count($user) > 0) {
            if (!$user[0]->isAuth) {
                return true;
            }
            return false;
        }
        return false;
    }

}
