<?php

use App\Models\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$10$5D2x6a8wtDdYG6cYXqPv8.y6F5NKaWx4rTNmrOEULg/MEyG/Sttgq', // password
        'status' => $faker->boolean,
    ];
});
