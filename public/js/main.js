$(document).ready(function() {
    class Request
    {
        generate(url,func) {
            $.ajax({
                url : url,
                method : 'get',
                dataType : 'json'
            }).done((data) => {
                if(!Object.entries(data).length) {
                    toastr.warning(`Warning`);
                    return false;
                }
                request[func](data);
                console.log(data);
            });

        }

        userEdit (data) {
            let modal = $(`.modal`),
                modalBody = $(`.modal-body`),
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
                                    <option value="1">Default</option>
                                    <option value="0">Blocked</option>
                                </select>                            
                              </div>
                             <button type="button" class="btn btn-primary update" data-action="/admin/user/${data.id}">Update</button>
                             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                         </div>`;

            modalBody.append(block);

            $(`#name`).val(data.name);
            $(`#email`).val(data.email);
            $(`#status`).val(data.status);

            modal.modal();
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
                    modal.modal(`hide`);
                    toastr.success(data.message);
                },
                error : (err) => {
                    $.each(err.responseJSON.errors, (key,value) => {
                        if(key === 'status') {
                            let option = `<option value="1">Default</option>
                                          <option value="0">Blocked</option>`;
                            $(`#status`).empty().append(option);
                        }
                        $(`#${key}`).siblings(`.errorBlock`).text(value[0]);
                    });
                }
            });
        }
    }
    let request = new Request();

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
        request.generate(url,func);
    });

    $(document).on(`click`,`.update`,(e) => {
        let elem = $(e.target),
            url = elem.attr(`data-action`);

        if(!url) return false;

        request.updateUser(url,elem[0]);
    });

    $(document).on(`focus`,`input`, function(e) {
        $(this).siblings(`.errorBlock`).text(``);
    });

    $(document).on(`hidden.bs.modal`, `.modal`, function(e) {
        $(`.modal-body`).empty();
    });
});

