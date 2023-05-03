window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 30000;
  document.getElementById("loan-years").value = 10;
  document.getElementById("loan-rate").value = 6;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  const updatedMonthlyPayment = calculateMonthlyPayment(currentUIValues);
  updateMonthly(updatedMonthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let { amount, years, rate, result, dividen, divisor } = values;
  rate = rate / 100 / 12;
  years = -Math.abs(years * 12);
  dividen = amount * rate;
  divisor = 1 - Math.pow(1 + rate, years);
  result = (dividen / divisor).toFixed(2);
  return result;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentUI = document.querySelector("#monthly-payment");
  monthlyPaymentUI.innerHTML = monthly;
}
