<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([

            [
                'Name' => 'Vid',
                'Surname' => 'Bukovec',
                'email' => 'vid.bukovec8361@gmail.com',
                'password' => hash::make('test123'),
                'Telephone' => '040831124',
                'Country' => 'Slovenija',
                'Region' => 'Dolenjska',
                'houseNumberAndStreet' => 'Dvor 107',
                'PostCode' => '8361',
                'isGuest'=> false,
                'isAuth' => true,
                'isNewCustomer' => true,
                'token' => Hash::make(Str::random(40))
            ],
            [
                'Name' => 'Maks',
                'Surname' => 'Malenšek',
                'email' => 'maks.malensek@gmail.com',
                'password' => hash::make('belilo123'),
                'Telephone' => '040212999',
                'Country' => 'Slovenija',
                'Region' => 'Dolenjska',
                'houseNumberAndStreet' => 'Dolenjske toplice 10a',
                'PostCode' => '8350',
                'isGuest'=> false,
                'isAuth' => true,
                'isNewCustomer' => false,
                'token' => Hash::make(Str::random(40))
            ]
        ]);
    }
}
