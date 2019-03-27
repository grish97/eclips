<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index() {
        $userCount = User::query()
            ->where('is_admin',null)
            ->count();

        $vehicleCount = Vehicle::query()->count();

        return view('admin.dashboard',compact('userCount','vehicleCount'));
    }
}
