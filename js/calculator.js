'use strict';

var buttonInput = document.querySelector('button');
buttonInput.addEventListener('click', buttonEnter);
var outputField = document.querySelector('#output');

function buttonEnter() {
   return outputField.innerHTML = buttonInput.value;
}

document.getElementById("reset").onclick = function() {
   document.getElementById("output").innerHTML = "";
};
