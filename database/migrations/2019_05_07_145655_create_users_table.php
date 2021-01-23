<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('Name');
            $table->string('Surname');
            $table->string('email');
            $table->string('password')->nullable($value=true);
            $table->string('Telephone');
            $table->string('Country')->nullable($value=true);
            $table->string('Region')->nullable($value=true);
            $table->string('houseNumberAndStreet')->nullable($value=true);
            $table->integer('Postcode')->nullable($value=true);
            $table->boolean('isAuth');
            $table->boolean('isNewCustomer');
            $table->boolean('isGuest');
            $table->string('token')->unique();
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
        Schema::dropIfExists('users');
    }
}
