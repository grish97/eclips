<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Make::class, function (Faker $faker) {

    $faker->addProvider(new \Faker\Provider\Fakecar($faker));
    $vehicle = $faker->vehicleArray();

    return [
        'name'  => $vehicle['brand']
    ];
});

$factory->define(App\Models\Models::class, function(Faker $faker) {

    $faker->addProvider(new \Faker\Provider\Fakecar($faker));
    $vehicle = $faker->vehicleArray();

    return [
      'name' => $vehicle['model'],
      'year' => $faker->biasedNumberBetween(1967,2018,'sqrt'),
    ];
});

