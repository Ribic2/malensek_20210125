<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('itemName');
            $table->double('itemPrice', 100, 2);
            $table->double('defaultItemPrice', 100,2);
            $table->string('itemImg');
            $table->string('itemImgDir');
            $table->integer('discount')->default(0);;
            $table->boolean('isOnSale')->default(false);
            $table->mediumText('itemDescription');
            $table->boolean('isEditable')->nullable($value=true);
            $table->integer('quantity');
            $table->boolean('isAvailable')->nullable($value=true);
            $table->string('categories');
            $table->string('subCategories')->nullable($value=true);
            $table->string('colors');
            $table->boolean('delisted')->default(0);
            $table->string('dimensions');
            $table->integer('OverallRating')->default(0);
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
        Schema::dropIfExists('item');
    }
}
