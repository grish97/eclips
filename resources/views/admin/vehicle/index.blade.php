@extends('layouts.admin')

@section('content')
    <table class="table mt-5">
        <thead>
            <tr>
                <th>N</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($vehicles as $key => $vehicle)
                <tr>
                    <th>{{$key + 1}}</th>
                    <td>{{$vehicle->make->name}}</td>
                    <td>{{$vehicle->model->name}}</td>
                    <td>{{$vehicle->year->year}}</td>
                    <td>
                        <a href="/admin/vehicle/{{$vehicle->id}}/edit" class="mr-3 text-success requestVehicle" data-func="edit"><i class="far fa-edit"></i></a>
                        <a href="/admin/vehicle/{{$vehicle->id}}" class="text-primary mr-3 requestVehicle" data-func="show"><i class="far fa-eye"></i></a>
                        <a href="/admin/vehicle/{{$vehicle->id}}" class="text-danger requestVehicle" data-func="delete"><i class="far fa-trash-alt"></i></a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Vehicle</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {{--CONTENT--}}
                </div>
            </div>
        </div>
    </div>

@endsection