<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'UUID',
        'userId',
        'itemId',
        'quantity',
        'paymentStatus',
        'typeOfPayment',
        'status'
    ];

    public function items(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Item::class, 'id', 'itemId');
    }
    public function user(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(User::class, 'id', 'userId');
    }


}
