<?php

namespace App;

use App\Notifications\MailResetPasswordNotification;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Foundation\Auth\User as Authenticated;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Passport\HasApiTokens;
use Laravel\Cashier\Billable;

class User extends Authenticated implements CanResetPassword
{
    use Notifiable, HasApiTokens, HasRoles, Billable;

    protected $fillable = [
        'name',
        'surname',
        'email',
        'password',
        'Telephone',
        'isNewCustomer',
        'isAuth',
        'isGuest',
        'Postcode',
        'houseNumberAndStreet',
        'token',
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function order(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(OrderIdStore::class);
    }

    /**
     * Override the mail body for reset password notification mail.
     * @param $token
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new MailResetPasswordNotification($token));
    }


}
