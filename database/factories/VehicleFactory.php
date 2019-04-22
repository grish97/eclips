<?php

use App\Models\Make;
use App\Models\Models;
use App\Models\Year;
use App\Models\Detail;
use App\Models\Vehicle;
use Faker\Generator as Faker;

$factory->define(Vehicle::class, function (Faker $faker) {

    $makeId = Make::query()->pluck('id')->toArray();
    $modelId = Models::query()->pluck('id')->toArray();
    $yearId = Year::query()->pluck('id')->toArray();
    $detailId = Detail::query()->pluck('id')->toArray();

    return [
        'make_id'   => $makeId[array_rand($makeId)],
        'model_id'  => function () {
            return factory(\App\Models\Models::class)->create()->id;
        },
        'year_id'   => $yearId[array_rand($yearId)],
        'detail_id' => $detailId[array_rand($detailId)],
    ];
});
