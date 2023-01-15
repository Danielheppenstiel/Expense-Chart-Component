const days = document.querySelectorAll('.day');

const daysOfTheWeek = new Days();

const ui = new UI();

// EVENT LISTENER 

days.forEach(function(day, index) {

    day.addEventListener('mouseover', function() {
        daysOfTheWeek.getData().then(data => {
            ui.displayData(data[index]);
        });
    });

});


days.forEach(function(day, index) {

    day.addEventListener('mouseout', function() {
        daysOfTheWeek.getData().then(data => {
            ui.removeDisplay(data[index]);
        });
    });

});