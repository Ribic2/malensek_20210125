<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'itemName' => $this->itemName,
            'itemPrice' => $this->itemPrice,
            'itemImg' => $this->itemImg,
            'itemImgDir' => $this->itemImgDir
        ];
    }
}
