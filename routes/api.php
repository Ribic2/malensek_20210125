<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Api V1

//Item categories
Route::get('/item/categories', 'ItemController@getCategories');
Route::post('/item/category', 'ItemController@getSpecificItems');
Route::get('/items/all', 'ItemController@getItemsCustomer');

// Guest cart
Route::post('/cart/check', 'CartController@checkCartGuest');

// Gets all items
Route::get('/item/{id}', 'ItemController@getItem');
Route::get('/item/{id}/reviews', 'ItemController@getReviews');

// Register
Route::post('/user/register', 'RegisterController@register');

// Sends contact
Route::post('/contact/add', 'ContactController@sendContact');

// Set password
Route::patch('/user/set/password', 'RegisterController@setPassword');

// Change cart
Route::patch('/item/{id}/cart/quantity/custom', 'CartController@changeQuantityCustom');

//User login
Route::post('/user/check/token', 'RegisterController@checkIfPasswordSet');
Route::post('/user/login', 'LoginController@login');
Route::post('/user/guest/create', 'RegisterController@registerGuest');
Route::post('/set-password', 'RegisterController@sendPasswordResetLink');

Route::post('/create-payment', 'OrderController@createOrder');
Route::post('/execute-payment', 'OrderController@executePayment');

//Password reset
Route::post('/reset-password', 'PasswordController@sendPasswordResetLink');
Route::post('/reset/password', 'PasswordController@callResetPassword');

Route::middleware('auth:api')->group(function (){
    // Favourites
    Route::get('/user/favourites', 'FavouriteController@getFavourites');
    Route::post('/user/favourites/item/{id}/add', 'FavouriteController@addToFavourites');
    //cart
    Route::post('/item/{id}/cart/add', 'CartController@addItemToCart');
    Route::get('/user/cart', 'CartController@getCart');
    Route::delete('/item/{id}/cart/delete', 'CartController@deleteFromCart');
    Route::patch('/item/{id}/cart/quantity', 'CartController@changeQuantity');

    // Reviews
    Route::post('/item/{id}/review/add', 'ItemController@addReview');

    Route::post('/user/admin', 'AuthController@checkIfAdmin');
    // User
    Route::patch('/user/credentials', 'RegisterController@updateCredentials');
    Route::post('/user/data','AuthController@getUserData');
    Route::patch('/user/change/basic', 'UserController@changeUserDataBasics');
    Route::patch('/user/change/residence', 'UserController@changeUserDataResidence');
    Route::get('/user/order/history', 'UserController@getUserOrderHistory');

    //Contact
    Route::get('/contact/all', 'ContactController@getContacts');
    Route::get('/contact/all/oldest', 'ContactController@getOldestContacts');

    // Admin authentication is required
    Route::post('/items/search', 'ItemController@searchForItems')->middleware('check.admin');
    Route::patch('/item/{id}/change/status', 'ItemController@changeStatus')->middleware('check.admin');
    Route::patch('/item/{id}/change', 'ItemController@changeItem')->middleware('check.admin');
    Route::get('/items/delisted', 'ItemController@delistedItems')->middleware('check.admin');
    Route::get('/items/listed', 'ItemController@listedItems')->middleware('check.admin');
    Route::get('/items', 'ItemController@getItems')->middleware('check.admin');
    Route::delete('/item/{id}/delete', 'ItemController@deleteItem')->middleware('check.admin');

    Route::get('/orders', 'OrderController@getOrders')->middleware('check.admin');
    Route::get('/orders/complete', 'OrderController@complete')->middleware('check.admin');
    Route::get('/orders/notComplete', 'OrderController@notComplete')->middleware('check.admin');
    Route::get('/orders/latest', 'OrderController@latestOrders')->middleware('check.admin');
    Route::get('/orders/oldest', 'OrderController@oldestOrders')->middleware('check.admin');

    Route::patch('/order/{id}/complete', 'OrderController@confirmOrder')->middleware('check.admin');
    Route::patch('/order/{id}/deny', 'OrderController@denyOrder')->middleware('check.admin');
    Route::patch('/order/{id}/delay', 'OrderController@delayOrder')->middleware('check.admin');


    Route::get('/categories/all', 'ItemController@getAllCategories')->middleware('check.admin');
    Route::post('/item/add', 'ItemController@addItem')->middleware('check.admin');

    Route::get('/user/all', 'AuthController@getAllUsers')->middleware('check.admin');
    Route::delete('/user/{id}/delete', 'AuthController@deleteUser')->middleware('check.admin');
    Route::patch('/user/{id}/change/admin', 'AuthController@changeAdminRole')->middleware('check.admin');
});




