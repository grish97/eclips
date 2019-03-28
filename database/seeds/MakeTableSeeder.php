<?php

use App\Models\Make;
use App\Models\Models;
use Illuminate\Database\Seeder;

class MakeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Make::class,10)->create()->each(function($make) {
            $make->model()->save(factory(Models::class)->make());
        });
    }
}
