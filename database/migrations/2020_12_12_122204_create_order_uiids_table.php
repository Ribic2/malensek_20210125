<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderUiidsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_uiids', function (Blueprint $table) {
            $table->id();
            $table->uuid('UUID');
            $table->foreignId('userId')->references('id')->on('users');
            $table->boolean('paymentStatus')->nullable($value=true);
            $table->enum('typeOfPayment', ['whenDelivered', 'prepaid'])->nullable($value=true);
            $table->enum('status', ['confirmed', 'denied', 'not-reviewed']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_uiids');
    }
}
