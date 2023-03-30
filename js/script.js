// Created by: Sam Makuc
// Created on: March 2023
// This file contains the JS functions for index.html

function enterClicked() {
  // get hours worked and hourly rate from input fields
  let hoursWorked = parseInt(document.getElementById("hours-worked").value);
  let hourlyRate = parseInt(document.getElementById("hourly-rate").value);
  
  // do math
  let result = (hoursWorked * hourlyRate) * 0.7995;
  result = result.toFixed(2);
  
  // display result back to user
  document.getElementById('salary-info').innerHTML = "Your pay is $ " + result + ".";
}
