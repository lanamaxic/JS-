let today = new Date()
let curentMonth = today.getMonth()
let currentYear = today.getFullYear()

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

let monthAndYear = document.getElementById('monthAndYear')

function showCalendar(month, year) {
    let firstday = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById('calendar-body')

    tbl.innerHTML= ''

    monthAndYear.innerHTML = months[month] + " " + year

    let date = 1;

    for(i=0; i < 6; i++){
        let row = document.createElement('tr')

        for(j=0; j<7; j++){
            let cell = document.createElement
        }
    }
}