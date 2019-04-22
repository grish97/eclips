<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(MakeSeeder::class);
        $this->call(YearSeeder::class);
        $this->call(DetailSeeder::class);
        $this->call(VehicleSeeder::class);
    }
}
