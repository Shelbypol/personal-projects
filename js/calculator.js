'use strict';
var numInput = function(event){
    var number = document.getElementsByClassName('num'.value);
    document.getElementById('output').innerHTML = number;
};
document.getElementsByClassName('num').addEventListener('click', numInput);
