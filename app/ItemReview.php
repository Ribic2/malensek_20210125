<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ItemReview extends Model
{
    protected $fillable = ['comment', 'rating', 'itemsId', 'userId'];

    public function user(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(User::class, 'id', 'userId')->select(['id', 'Name', 'Surname']);
    }

}
