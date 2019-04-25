$(document).ready(function () {
    class Vehicle {

        constructor () {
            this.modal = $(`.modal`);
        }

        request (url, func) {
            $.ajax({
                url : url,
                method : `get`,
                dataType : `json`,
                success : (data) => {
                    if (data) vehicle[func](data);
                },
            });
        }

        edit (data) {
            let modalBody = $(`.modal-body`),
                block = `<div>
                            <div class="form-group">
                                <label for="make">Make</label>
                                <input type="text" class="form-control" name="make" id="make">
                                <span class="errorBlock"></span>
                            </div>
                            <div class="form-group mt-3">
                                <label for="model">Model</label>
                                <input type="text" class="form-control" name="model" id="model">
                                <span class="errorBlock"></span>
                            </div>
                            <div class="form-group mt-3">
                                <label for="year">Year</label>
                                <input type="number" class="form-control" name="year" id="year">
                                <span class="errorBlock"></span>
                            </div>
                            <button type="button" class="btn btn-success update" data-url="admin/vehicle/${data.id}">Update</button>                         
                        </div>`;

            modalBody.append(block);

            $(`#make`).val(data.make.name);
            $(`#model`).val(data.model.name);
            $(`#year`).val(data.year.year);

            this.modal.modal();
        }

        update (url) {
            $.ajax({
                url : url,
                method : `put`,
                dataType : `json`,
                success : (data) => {
                    console.log(data);
                }
            });
        }

        events () {
            //AJAX SETUP
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            $(document).on(`click`, `.requestVehicle`, function (event)  {
                event.preventDefault();
                let elem = $(this),
                    url = elem.attr(`href`),
                    func = elem.attr(`data-func`);

                if (!url || !func) return false;

                vehicle.request(url, func);
            });

            $(document).on(`click`, `.update`, (e) => {
                let url = $(e.target).attr(`data-url`);
                vehicle.update(url);
            });

            //EVENT CLOSE MODAL
            $(document).on(`hidden.bs.modal`, `.modal`, function(e) {
                $(`.modal-body`).empty();
            });
        }
    }
    //EXAMPLE CLASS VEHICLE
    let vehicle = new Vehicle();
    //RUN VEHICLE EVENTS
    vehicle.events();
});