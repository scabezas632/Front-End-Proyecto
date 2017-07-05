<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;
use Faker\Factory as Faker;

class UserTableSeeder extends Seeder {

    public function run()
    {

        $faker = Faker::create();
            $id = \DB::table('users')->insertGetId(array(

                'nombre'        => 'admin',

                'apellido'      => $faker->lastName,

                'email'         => 'api@utem.cl',

                'password'      => \Hash::make('secret')



            ));
    }

}