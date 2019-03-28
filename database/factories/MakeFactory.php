<?php

use App\Models\Make;
use Faker\Generator as Faker;

$factory->define(Make::class, function (Faker $faker) {

    $faker->addProvider(new \Faker\Provider\Fakecar($faker));

    return [
        'name' => $faker->vehicleBrand,
    ];
});
