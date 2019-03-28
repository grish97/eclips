<?php

use App\Models\Models;
use Faker\Generator as Faker;

$factory->define(Models::class, function (Faker $faker) {

    return [
        'name' => $faker->vehicleModel,
        'year' => $faker->biasedNumberBetween('1977','2019'),
    ];
});
