<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favourite extends Model
{
    protected $fillable = [
        "usersId", "itemsId"
    ];

    // Selects multiple items
    public function items()
    {
        return $this->hasOne(Item::class, 'id', 'itemsId');
    }
}
