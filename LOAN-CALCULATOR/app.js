//Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)

//Hide Results


//UI Variables
const loanForm = document.getElementById('loan-form');
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');

const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');
//const spinner = document.getElementById('loading');

//Calculate results
function calculateResults(e) {
    //Hide results
    results.style.display = 'none'
    //Show loader
    loading.style.display = 'block'
    //--
    setTimeout(clearLoaderShowresults, 3000)
    // Prevent page to reload when form submitted
    e.preventDefault();
    //Principles
    let amountValue = parseFloat(amount.value)
    let interestValue = parseFloat(interest.value) / 100 / 12
    let yearsValue = parseFloat(years.value) * 12
    //Compute monthly payment
    const x = Math.pow(1 + interestValue, yearsValue)
    const monthly = (amountValue * x * interestValue) / (x - 1)

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * yearsValue).toFixed(2)
        totalInterest.value = ((monthly * yearsValue) - amountValue).toFixed(2)
    } else {
        //aler('error)
        showError('Please check')
    }

}

function clearLoaderShowresults() {

}


//Show Error
function showError(error) {
    //hide result
    document.getElementById('results').style.display = 'none';
    //hide loader
    document.getElementById('loading').style.display = 'none';
    //create a div
    const errorDiv = document.createElement('div');
    //get Element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //add class
    errorDiv.className = 'alert alert-danger';
    //  Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert Error above heading
    card.insertBefore(errorDiv, heading);

    //clear Error after 3second
    setTimeout(clearError, 2000);
}

function clearError() {
    document.querySelector('.alert').remove();
}