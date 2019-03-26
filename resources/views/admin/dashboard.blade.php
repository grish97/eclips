@extends('layouts.admin')

@section('content')
    <h2 class="ml-4">My Dashboard</h2>
    <hr/>
    <div class="w3-row-padding w3-margin-bottom">

        <div class="w3-quarter">
            <div class="w3-container w3-orange w3-text-white w3-padding-16">
                <div class="w3-left"><i class="fas fa-users"></i></div>
                <div class="w3-right">
                    <h3>{{$userCount}}</h3>
                </div>
                <div class="w3-clear"></div>
                <h4>Users</h4>
            </div>
        </div>

        <div class="w3-quarter">
            <div class="w3-container w3-blue w3-padding-16">
                <div class="w3-left"><i class="fas fa-car"></i></div>
                <div class="w3-right">
                    <h3>{{$vehicleCount}}</h3>
                </div>
                <div class="w3-clear"></div>
                <h4>Vehicles</h4>
            </div>
        </div>
    </div>
@endsection
