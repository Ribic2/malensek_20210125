<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemReviewTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('itemsId')->references('id')->on('items')->onDelete('cascade');
            $table->foreignId('userId')->references('id')->on('users')->onDelete('cascade');
            $table->string('comment');
            $table->integer('rating');
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
        Schema::dropIfExists('item_reviews');
    }
}
