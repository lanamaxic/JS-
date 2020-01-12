let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-success");
                } 
                // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}

// Explanation- When the program is started, the function showCalendar() is with arguments currentMonth 
// and currentYear. This function populates the table with dates at the correct places.

// The buttons "previous", "next" and dropdown "jump" control the functions, previous(), next() and jump().
//  These function update the currentMonth and currentYear variable.

// How showCalendar Works-

// showCalendar(month, year) function which takes in two parameters, month and year.
// Once, the function is called, it dynamically generates a calendar in HTML and appends it into our table.

// Get the starting day of the month, we’ll use -

// let firstDay = (new Date(year, month)).getDay();
// Next, get the number of days in that month. We can achieve this too using date function.

// let daysInMonth = 32 - new Date(year, month, 32).getDate();

// Explanation, the function new Date(year, month, 32) returns the 32nd day after the month started.
// If we subtract that date from 32, we get the final day of that month. 
// Example, If we pass feb 2018 as an argument, its ‘32nd’ day will be 4th of march, subtract 32 from 4 and 
// we get 28, final day of the month of feb 2018.

// Once we have the two things ready, we populate the table with numbers 1 to [last day of month] on appropriate
// places. For example, if the starting of that month is Thursday and Ending date is 28, 
// we’ll put the number 1 below thursday, 2 below, friday, 3 below saturday and so on. 
// When we reach 28, we break out of the loop.

// Here, we use a nested for loop because we have upto 6 rows and 7 columns.

// In the outer loop, we create a new “tr” element, ie, table row, up to 6 times.
//  (maximum number of rows we need to create the calendar), then run the inner loop to create elements in each 
//  rows, then append those rows into our table.

// In the inner loop, we populate each row with “td” elements in it. We keep track of the date using variable
// “date” in it.There are three if conditions at each iteration:

// If we’re at first row and we have not yet reached first yet, create td element and leave it blank.

// If “date” is higher than max days in that month, we break out of the loop because we have finished creating 
// the table.

// Else, we create the “td” element and print the “date” in it.