$(document).ready(function() {
    class UserRequest
    {
        constructor () {
            this.rowId = null;
            this.modal = $(`.modal`);
        }

        generate(url,func) {
            $.ajax({
                url : url,
                method : 'get',
                dataType : 'json'
            }).done((data) => {
                if(!Object.entries(data).length) {
                    window.location.reload();
                    return false;
                }
                userRequest[func](data);
            });

        }

        userEdit (data) {
            let modalBody = $(`.modal-body`),
                block = `<div>
                             <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" class="form-control">
                                <span class="small text-danger errorBlock"></span>
                              </div>
                              <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" class="form-control">
                                <span class="small text-danger errorBlock"></span>
                              </div>
                              <div class="form-group mb-5">
                                <label for="status">Status</label>
                                <select name="status" id="status" class="form-control">
                                    <option value="0">Default</option>
                                    <option value="1">Blocked</option>
                                </select>                            
                              </div>
                             <button type="button" class="btn btn-primary update" data-action="/admin/user/${data.id}">Update</button>
                             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                         </div>`;

            modalBody.append(block);

            $(`#name`).val(data.name);
            $(`#email`).val(data.email);
            $(`#status`).find(`option[value=${data.status}]`).attr(`selected`,`selected`);

            this.modal.modal();
        }

        userShow (data) {
            let block = `<p><span class="font-weight-bold">Name: </span>${data.name}</p>
                         <p><span class="font-weight-bold">Email: </span>${data.email}</p>
                         <p><span class="font-weight-bold">Status: </span>${data.status}</p>
                         <p><span class="font-weight-bold">Created At: </span>${data.created_at}</p>
                         <p><span class="font-weight-bold">Updated At: </span>${data.updated_at}</p>`;

            $(`.modal-title`).text(`${data.name}\'s data`);
            this.modal.find(`.modal-body`).append(block);

            this.modal.modal(`show`);
        }

        userDelete (url) {
            let tableBody = $(`tbody`),
                block = `<p>You want to delete this user?</p>
                         <button type="button" class="btn btn-danger delete">Yes</button>
                         <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>`;

            $(`.modal-title`).text(`Delete user`);
            this.modal.find(`.modal-body`).append(block);
            this.modal.modal();

            $(document).on(`click`,`.delete`, (e) => {
                $.ajax({
                    url : url,
                    method : 'delete',
                    dataType : 'json'
                }).done((data) => {
                    this.modal.modal(`hide`);
                    toastr.info(data.message);
                    $(`tr[data-id=${userRequest.rowId}]`).remove();

                    if (!tableBody.children().length) {
                        block = `<div class="jumbotron">
                                    <h2 class="text-muted">Empty user</h2>
                                </div>`;

                        $(`.table`).before(block).remove();
                    }
                })
            });

        }

        updateUser (url) {
            let name = $(`#name`),
                email = $(`#email`),
                status = $(`#status`),
                modal = $(`.modal`);

                $.ajax({
                    url : url,
                    type : 'put',
                    data :  {
                        name : name.val(),
                        email : email.val(),
                        status : status.val()
                    },
                    dataType : 'json',
                    success : (data) => {
                        let row = $(`tr[data-id=${userRequest.rowId}]`);

                        row.find(`.name`).text(data.user.name);
                        row.find(`.email`).text(data.user.email);
                        row.find(`.status`).text(data.user.status);

                        modal.modal(`hide`);
                        toastr.success(data.message);
                    },
                    error : (err) => {
                        $.each(err.responseJSON.errors, (key,value) => {
                            if(key === 'status') {
                                let option = `<option value="0">Default</option>
                                          <option value="1">Blocked</option>`;
                                $(`#status`).empty().append(option);
                            }
                            $(`#${key}`).siblings(`.errorBlock`).text(value[0]);
                        });
                    }
                });
        }
    }
    let userRequest = new UserRequest();

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $(document).on(`click`,`.request`,(e) => {
        e.preventDefault();
        let elem = $(e.target).parent(`a`),
            url = elem.attr(`href`),
            func =  elem.attr(`data-func`);

        if(!url || !func) return false;

        userRequest.rowId = elem.closest(`tr`).attr(`data-id`);

        if(func === 'userDelete') {
            userRequest.userDelete(url);
            return false;
        }
        userRequest.generate(url,func);
    });

    $(document).on(`click`,`.update`,(e) => {
        let elem = $(e.target),
            url = elem.attr(`data-action`);

        if(!url) return false;

        userRequest.updateUser(url);
    });

    $(document).on(`focus`,`input`, function(e) {
        $(this).siblings(`.errorBlock`).text(``);
    });

    $(document).on(`hidden.bs.modal`, `.modal`, function(e) {
        $(`.modal-body`).empty();
    });
});

