@extends('layouts.admin')

@section('content')
        <table class="table mt-5">
            <thead>
                <tr>
                    <th>N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($users as $key => $user)
                    <tr>
                        <th scope="row">{{$key}}</th>
                        <td>{{$user->name}}</td>
                        <td>{{$user->email}}</td>
                        <td>{{$user->status}}</td>
                        <td>
                            <a href="" class="mr-3 text-success"><i class="fas fa-user-edit"></i></a>
                            <a href="" class="text-danger"><i class="fas fa-user-times"></i></a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
@endsection