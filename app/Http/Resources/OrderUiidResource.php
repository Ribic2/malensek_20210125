<?php

namespace App\Http\Resources;

use App\Order;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderUiidResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'UUID' => $this->UUID,
            'user' => User::find($this->userId),
            'items' => OrderResource::collection(Order::where('UUID', $this->UUID)->get()),
            'created_at' => $this->created_at
        ];
    }
}
