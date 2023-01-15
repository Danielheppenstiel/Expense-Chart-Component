class UI {
    constructor() {
        // Amount Display Elements
        this.monday = document.getElementById('mon-data');
        this.tuesday = document.getElementById('tue-data');
        this.wednesday = document.getElementById('wed-data');
        this.thursday = document.getElementById('thu-data');
        this.friday = document.getElementById('fri-data');
        this.saturday = document.getElementById('sat-data');
        this.sunday = document.getElementById('sun-data');

        // Element Bars
        this.mondayBar = document.getElementById('monday');
        this.tuesdayBar = document.getElementById('tuesday');
        this.wednesdayBar = document.getElementById('wednesday');
        this.thursdayBar = document.getElementById('thursday');
        this.fridayBar = document.getElementById('friday');
        this.saturdayBar = document.getElementById('saturday');
        this.sundayBar = document.getElementById('sunday');

    };

    displayData(day) {

        if (day.day === 'mon') {
            this.monday.classList.add('data-display');
            this.monday.innerHTML = day.amount;
            this.mondayBar.style.backgroundColor = 'var(--cyan)';
        } else if (day.day === 'tue') {
            this.tuesday.classList.add('data-display');
            this.tuesday.innerHTML = day.amount;
            this.tuesdayBar.style.backgroundColor = 'var(--cyan)';
        } else if (day.day === 'wed') {
            this.wednesday.classList.add('data-display');
            this.wednesday.innerHTML = day.amount;
            this.wednesdayBar.style.backgroundColor = 'var(--cyan)';
        } else if (day.day === 'thu') {
            this.thursday.classList.add('data-display');
            this.thursday.innerHTML = day.amount;
            this.thursdayBar.style.backgroundColor = 'var(--cyan)';
        } else if (day.day === 'fri') {
            this.friday.classList.add('data-display');
            this.friday.innerHTML = day.amount;
            this.fridayBar.style.backgroundColor = 'var(--cyan)';
        } else if (day.day === 'sat') {
            this.saturday.classList.add('data-display');
            this.saturday.innerHTML = day.amount;
            this.saturdayBar.style.backgroundColor = 'var(--cyan)';
        } else if (day.day === 'sun') {
            this.sunday.classList.add('data-display');
            this.sunday.innerHTML = day.amount;
            this.sundayBar.style.backgroundColor = 'var(--cyan)';

        };

    };

    removeDisplay(day) {

        if (day.day === 'mon') {
            this.monday.classList.remove('data-display');
            this.monday.innerHTML = '';
            this.mondayBar.style.backgroundColor = 'var(--soft-red)';
        } else if (day.day === 'tue') {
            this.tuesday.classList.remove('data-display');
            this.tuesday.innerHTML = '';
            this.tuesdayBar.style.backgroundColor = 'var(--soft-red)';
        } else if (day.day === 'wed') {
            this.wednesday.classList.remove('data-display');
            this.wednesday.innerHTML = '';
            this.wednesdayBar.style.backgroundColor = 'var(--soft-red)';
        } else if (day.day === 'thu') {
            this.thursday.classList.remove('data-display');
            this.thursday.innerHTML = '';
            this.thursdayBar.style.backgroundColor = 'var(--soft-red)';
        } else if (day.day === 'fri') {
            this.friday.classList.remove('data-display');
            this.friday.innerHTML = '';
            this.fridayBar.style.backgroundColor = 'var(--soft-red)';
        } else if (day.day === 'sat') {
            this.saturday.classList.remove('data-display');
            this.saturday.innerHTML = '';
            this.saturdayBar.style.backgroundColor = 'var(--soft-red)';
        } else if (day.day === 'sun') {
            this.sunday.classList.remove('data-display');
            this.sunday.innerHTML = '';
            this.sundayBar.style.backgroundColor = 'var(--soft-red)';
        };

    };


};