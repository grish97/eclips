<?php

use App\Models\Year;
use Faker\Generator as Faker;

$factory->define(Year::class, function (Faker $faker) {

    $faker->addProvider(new \Faker\Provider\Fakecar($faker));

    return [
        'year' => $faker->biasedNumberBetween(1967,2018),
    ];
});
