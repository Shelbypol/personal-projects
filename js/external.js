console.log('Hello from external Javascript');

// alert("Welcome to my website!");
//
// var usersFavoriteColor = prompt("what's your favorite color?");
//
// alert (usersFavoriteColor + " is my favorite color too!");

// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.


// Problem 1)

var littleMermaid = prompt('How many days would you like to rent: Little Mermaid for?');

var brotherBear =  prompt('How many days would you like to rent: Brother Bear');
var hurcules = prompt('How many days would you like to rent: Hurcules');
var daysRented = parseInt(littleMermaid) + parseInt(brotherBear) + parseInt(hurcules);
var moviePriceUsCurrencyPerDay = 3;

var totalRentalCost = daysRented * moviePriceUsCurrencyPerDay;

alert(totalRentalCost);


// Problem
var googleWeeklyHours = prompt('How many weekly hours did you work at google:');
var googleRatePerHour = 400;

var amazonWeeklyHours = prompt('How many weekly hours did you work at amazon:');
var amazonRatePerHour = 380;

var facebookWeeklyHours = prompt('How many weekly hours did you work at facebook:');
var facebookRatePerHour = 350;

var totalUsWeeklyCurrencyEarned = ((parseFloat(googleWeeklyHours)) * googleRatePerHour) + ((parseFloat(amazonWeeklyHours)) * amazonRatePerHour) + ((parseFloat(facebookWeeklyHours)) * facebookRatePerHour);

alert(totalUsWeeklyCurrencyEarned);


// Problem
var classNotFull = false;
var noClassConflict = true;

var canEnroll = classNotFull && noClassConflict;
alert('Can enroll at this time: ' + canEnroll);
