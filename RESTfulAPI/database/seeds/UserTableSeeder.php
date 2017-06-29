<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;
use Faker\Factory as Faker;

class UserTableSeeder extends Seeder {

    public function run()
    {

        $faker = Faker::create();
        for ($i=0 ; $i<18 ; $i++) {
            $id = \DB::table('users')->insertGetId(array(

                'name'          => $faker->firstName,

                'apellido'      => $faker->lastName,

                'email'         => $faker->unique()->email,

                'password'      => \Hash::make('123456'),

                'rut'           => $faker->unique()->phoneNumber,

                'departamento'  => 'informatica',

                'jerarquia'  => 'docente',

                'contrato'=>'vigente'



            ));

        }
    }

}