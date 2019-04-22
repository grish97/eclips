<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Grish',
            'email' => 'vasilyan@gmail.com',
            'password' => Hash::make('asd'),
            'status' => 0,
            'is_admin' => 1,
        ]);

        factory(User::class,20)->create();
    }
}
