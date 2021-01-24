<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderUiid extends Model
{
    protected $fillable = ['UUID', 'userId', 'typeOfPayment', 'paymentStatus', 'status'];


    public function user(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(User::class, 'id', 'userId');
    }

    public function order(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Order::class, 'UUID', 'UUID');
    }

}
