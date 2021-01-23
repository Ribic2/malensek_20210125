<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cart extends Model
{
    protected $fillable = ['quantity', 'itemId', 'userId'];

    /**
     * Returns items
     * @return HasOne
     */
    public function items()
    {
        return $this->hasOne('App\Item', 'id', 'itemId')->where([
            'delisted' => 0,
            ['quantity', '>', 0]
        ]);
    }

    public function price()
    {
        return $this->hasOne('App\Item', 'id', 'itemId')->select(array('id', 'itemPrice'));
    }
}
