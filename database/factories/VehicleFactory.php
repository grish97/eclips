<?php

use App\Models\Make;
use App\Models\Models;
use App\Models\Vehicle;
use App\Models\Detail;
use Faker\Generator as Faker;

$factory->define(Vehicle::class, function (Faker $faker) {

    $makeId = Make::query()->pluck('id')->toArray();
    $modelId = Models::query()->pluck('id')->toArray();
    $detailId = Detail::query()->pluck('id')->toArray();

    return [
        'make_id' => $makeId[array_rand($makeId)],
        'model_id' => $modelId[array_rand($modelId)],
        'detail_id' => $detailId[array_rand($detailId)],
    ];
});
