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
            });

        }

        userEdit (data) {
            let modal = $(`.modal`),
                modalBody = $(`.modal-body`),
                block = `<div>
                             <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" class="form-control">
                              </div>
                              <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" class="form-control">
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

        updateUser (url,form) {
            let name = $(`#name`),
                email = $(`#email`),
                status = $(`#status`);

            $.ajax({
                url : url,
                type : 'put',
                data :  {
                    name : name.val(),
                    email : email.val(),
                    status : status.val()
                },
                dataType : 'json',
            }).done((data) => {
                console.log(data);
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

    $(document).on(`hidden.bs.modal`, `.modal`, function(e) {
        $(`.modal-body`).empty();
    });
});

