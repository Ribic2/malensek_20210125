<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    use ThrottlesLogins;


    public function username(){
        return 'email';
    }
    /**
     * Attempts to login user
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     */
    public function login(Request $request): JsonResponse
    {
        // Login throttling
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);
            return response()->json($this->sendLockoutResponse($request), 403);
        }

        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            $this->incrementLoginAttempts($request);
            return response()->json(["message" => 'Dani podatki niso pravilni!'], 403);
        }

        // Clears login throttling and creates token
        $this->clearLoginAttempts($request);
        $user = Auth::user();
        $accessToken = $user->createToken('accessToken')->accessToken;

        return response()->json(
            ['access_token' => $accessToken, 'user' => Auth::user()]
        );

    }
}
