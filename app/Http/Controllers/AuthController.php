<?php

namespace App\Http\Controllers;


use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    /**
     * Checks if user is authenticated
     * @return JsonResponse
     */
    function getUserData(): JsonResponse
    {
        return response()->json([
            "user" => Auth::user(),
            "check" => Auth::check()
        ]);
    }

    /**
     * Changes users basic data
     * @param Request $request
     * @return Application|ResponseFactory|Response
     * @throws ValidationException
     */
    public function changeUserBasics(Request $request)
    {
        $name = $request->input('name');
        $surname = $request->input('surname');
        $phone = $request->input('phone');
        $userId = $request->input('userId');

        $changeBasic = User::find($userId);

        $changeBasic->Name = $name;
        $changeBasic->Surname = $surname;
        $changeBasic->Telephone = $phone;

        $rules = [
            'name' => 'required',
            'surname' => 'required',
            'phone' => 'required'
        ];

        $customMessage = [
            'required' => 'Mankajoči podatki!'
        ];

        $this->validate($request, $rules, $customMessage);

        if ($changeBasic->save()) {
            return response("Ok", 200);
        }
    }

    public function changeResidenceInfo(Request $request)
    {
        $postcode = $request->input('postcode');
        $houseNumberAndStreet = $request->input('houseNumberAndStreet');
        $region = $request->input('region');
        $userId = $request->input('userId');


        $rules = [
            'postcode' => 'required',
            'houseNumberAndStreet' => 'required',
            'region' => 'required'
        ];

        $customMessage = [
            'required' => 'Mankajoči podatki!'
        ];

        $this->validate($request, $rules, $customMessage);

        $changeBasic = User::find($userId);

        $changeBasic->houseNumberAndStreet = $houseNumberAndStreet;
        $changeBasic->Postcode = $postcode;
        $changeBasic->Region = $region;

        if ($changeBasic->save()) {
            return response("Ok", 200);
        }

    }

    public function confirmMail(Request $request)
    {
        $email = $request->input('email');

        $checkIfAlreadyAuth = User::select('isAuth')->where('email', $email)->get();
        $checkIfEmailExits = User::where('email', $email)->count();

        if ($checkIfEmailExits == 0) {
            return response("E-naslov ne obstaja!", 403)->header('Content-Type', 'text/plain');
        } else {
            if ($checkIfAlreadyAuth[0]->isAuth != "0") {
                return response("Račun je bil že potrjen!", 403)->header('Content-Type', 'text/plain');
            } else {
                User::where('email', $email)
                    ->update(['isAuth' => 1]);

                return response(1, 200)->header('Content-Type', 'text/plain');
            }
        }
    }

    /**
     * Gets all users and their roles
     * @return JsonResponse
     */
    public function getAllUsers(): JsonResponse
    {
       return response()->json(User::with('roles')->get());
    }

    /**
     * Delete user from database
     * @param int $id
     * @return JsonResponse
     */
    public function deleteUser(int $id): JsonResponse
    {
        try {
            User::find($id)->delete();
            return response()->json("Uporabnik uspešno izbrisan!");
        }
        catch(Exception $e){
            abort(400, $e);
        }
    }

    /**
     * Assign admin role to user, or remove it
     * @param int $id
     * @return JsonResponse
     */
    public function changeAdminRole(int $id): JsonResponse
    {
        // Finds user
        $User = User::find($id);

        // If user already has admin role then role is removed
        if($User->hasRole('admin')){
            $User->removeRole('admin');
            return response()->json("Admin role odvez uporabniku!");
        }
        else{
            // Otherwise role is assigned
            $User->assignRole('admin');
            return response()->json("Admin role dodeljen uporabniku!");
        }
    }

    /**
     * Checks if user is admin or not
     * @param Request $request
     * @return bool
     */
    public function checkIfAdmin(Request $request): bool
    {
        if(Auth::user()->hasRole('admin')){
            return true;
        }
        return false;
    }


}
