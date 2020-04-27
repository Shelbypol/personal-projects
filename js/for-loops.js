'use strict';

//========= Number 2 ==============
function showMultiplicationTable(num) {
    for (var i = 1; i < 11; i++) {
        console.log(num + ' x ' + i + ' = ' + num * i)
    }
}
// showMultiplicationTable(7);

//========= Number 3 ==============
function isEven(num){
    return parseFloat(num) % 2 === 0;
}

function randomTwoHundred() {
    var twoHundred = Math.floor(Math.random()* 200);
    if(isEven(twoHundred) === true){
        console.log(twoHundred + ' is even');
    } else {
        console.log(twoHundred + ' is odd');
    }
}

function isEvenOdd() {
    for(var i = 0; i <10; i++) {
        randomTwoHundred();
    }
}
// isEvenOdd();

//========= Number 4 ==============
function numTriangle(){
    for(var i = 1; i < 10; i++){
        var  str = i.toString();
        console.log(str.repeat(i));
    }
}
// numTriangle();

//========= Number 5 ==============
function downFive() {
    for(var i = 100; i > 0; i -= 5){
        console.log(i);
    }
}
// downFive();
