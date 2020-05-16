'use strict';


// //Clear
//
// //One

//
// //Two

//
//
// //Clear Button
// document.getElementById("reset").onclick = function() {
//    document.getElementById("output").innerHTML = "";
// };
//
// //one
// function oneButton() {
//    return outputField.innerHTML = oneInput.value;
// }
// //two
// function twoButton() {
//    return outputField.innerHTML = twoInput.value;
// }

//create an array to store user input and call back?


var buttonOutput = [];
console.log(buttonOutput);

$('.calcButton').on('click', function (e) {
    e.preventDefault();
    buttonOutput.push(.calcButton.value());
    $('#output').html(buttonOutput);
});

