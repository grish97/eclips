$(document).ready(function () {
    class Vehicle {

        constructor () {
            this.modal = $(`.modal`);
        }

        events () {
            $(document).on(`click`, `.requestVehicle`, (event) => {
                event.preventDefault();
                console.log($(event.target).parent(`a`).attr(`href`));
            });
        }
    }
    //EXAMPLE CLASS VEHICLE
    let vehicle = new Vehicle();
    //RUN VEHICLE EVENTS
    vehicle.events();
});