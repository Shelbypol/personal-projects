'use strict';


//Clear
var outputField = document.querySelector('#output');

//One
var oneInput = document.getElementById('one');
oneInput.addEventListener('click', oneButton);

//Two
var twoInput = document.getElementById('two');
twoInput.addEventListener('click', twoButton);



//Clear Button
document.getElementById("reset").onclick = function() {
   document.getElementById("output").innerHTML = "";
};

//one
function oneButton() {
   return outputField.innerHTML = oneInput.value;
}
//two
function twoButton() {
   return outputField.innerHTML = twoInput.value;
}

