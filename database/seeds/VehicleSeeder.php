<?php

use App\Models\Models;
use App\Models\Vehicle;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $countModel = Models::query()->count();

        factory(Vehicle::class,$countModel)->create();

    }
}
