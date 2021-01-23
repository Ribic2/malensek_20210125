<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $primaryKey = "id";
    protected $fillable = ["itemName", "itemPrice", "itemImg", "itemImgDir", "itemDescription", "quantity",
        "categories", "colors", "dimensions", 'delisted', 'OverallRating', 'defaultItemPrice'
    ];

    //Reviews relationship
    public function Review()
    {
        return $this->hasMany('App\itemReview', 'itemId');
    }
}
