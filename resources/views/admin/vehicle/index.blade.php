@extends('layout.admin')

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
                    <td>{{$vehicle->name}}</td>
                    <td>{{$vehicle->model->name}}</td>
                    <td>{{$vehicle->model->year}}</td>
                    <td></td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection