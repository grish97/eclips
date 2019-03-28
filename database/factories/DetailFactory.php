<?php

use App\Models\Detail;
use Faker\Generator as Faker;

$factory->define(Detail::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->realText(100,1)
    ];
});
