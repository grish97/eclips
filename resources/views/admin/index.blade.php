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
                            <a href="/admin/user/{{$user->id}}/edit" class="mr-3 text-success request" data-func="userEdit"><i class="fas fa-user-edit"></i></a>
                            <a href="/admin/user/{{$user->id}}" class="text-primary mr-3 request" data-func="userShow"><i class="far fa-eye"></i></a>
                            <a href="/admin/user/{{$user->id}}" class="text-danger request" data-func="userDelete"><i class="fas fa-user-times request"></i></a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        <div class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit User</h5>
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