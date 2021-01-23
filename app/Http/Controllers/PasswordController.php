<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    use SendsPasswordResetEmails, ResetsPasswords {
        SendsPasswordResetEmails::broker insteadof ResetsPasswords;
        ResetsPasswords::credentials insteadof SendsPasswordResetEmails;
    }

    /**
     * Send password reset link
     * @param Request $request
     * @return JsonResponse|RedirectResponse
     */
    public function sendPasswordResetLink(Request $request)
    {
        return $this->sendResetLinkEmail($request);
    }

    /**
     * Get the response for a successful password reset link.
     * @param Request $request
     * @param string $response
     * @return JsonResponse
     */
    protected function sendResetLinkResponse(Request $request, string $response): JsonResponse
    {
        return response()->json([
            'message' => 'E-pošta za spremembo gesla je bila uspešno poslana.',
            'data' => $response
        ]);
    }

    /**
     * Get the response for a failed password reset link.
     * @param Request $request
     * @return JsonResponse
     */
    protected function sendResetLinkFailedResponse(Request $request): JsonResponse
    {
        return response()->json([
            'message' => 'E-pošto nismo mogli poslati na ta naslov.'
        ]);
    }

    /**
     * Handle reset password
     * @param Request $request
     * @return JsonResponse|RedirectResponse
     */
    public function callResetPassword(Request $request)
    {
        return $this->reset($request);
    }

    /**
     * Reset the given user's password.
     *
     * @param CanResetPassword $user
     * @param string $password
     * @return void
     */
    protected function resetPassword(CanResetPassword $user, string $password)
    {
        $user->Password = Hash::make($password);
        $user->save();
        event(new PasswordReset($user));
    }

    /**
     * Get the response for a successful password reset.
     *
     * @param Request $request
     * @return RedirectResponse|JsonResponse
     */
    protected function sendResetResponse(Request $request)
    {
        return response()->json(['message' => 'Password reset successfully.']);
    }

    /**
     * Get the response for a failed password reset.
     * @param Request $request
     * @return RedirectResponse|JsonResponse
     */
    protected function sendResetFailedResponse(Request $request)
    {
        return response()->json(['message' => 'Failed, Invalid Token.']);
    }
}
