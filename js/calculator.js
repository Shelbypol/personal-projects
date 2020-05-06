'use strict';
var numInput = function(){
    var number = document.getElementsByClassName(num);
    document.getElementById('userInput').innerText= number.value;
};
document.getElementsByClassName('num').addEventListener('click', numInput);