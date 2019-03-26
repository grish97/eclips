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
                block = `<form action="/admin/user/${data.id}" class="updateForm">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" name="name" id="name">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" name="email" id="email">
                                </div>
                                <div class="form-group">
                                    <label for="status">Status</label>
                                    <input type="number" class="form-control" name="status" id="status">
                                </div>
                                <button type="submit" class="btn btn-primary update">Update</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </form>`;

            modalBody.append(block);

            $(`#name`).val(data.name);
            $(`#email`).val(data.email);
            $(`#status`).val(data.status);

            modal.modal();
        }

        updateUser (url,form) {
            let formData = new FormData(form);
            console.log(formData.get('name'))
            formData.append('_method', 'put');
            $.ajax({
                url : url,
                method : 'post',
                data :  formData,
                processData: false,
                contentType: false,
                success : (data) => {
                    console.log(data)
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

    $(document).on(`submit`,`.updateForm`,(e) => {
        e.preventDefault();
        let elem = $(e.target),
            url = elem.attr(`action`);

        if(!url) return false;

        request.updateUser(url,elem[0]);
    });

    $(document).on(`hidden.bs.modal`, `.modal`, function(e) {
        $(`.modal-body`).empty();
    });
});

