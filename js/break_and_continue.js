'use strict';


function rand(num) {
    return 0 < num > 50;
}

function isOdd(num) {
    return num % 2 !== 0;
}

function userPrompt(){
 return Number(prompt('Please enter an odd number between 1 and 50'));
}

function isOddAndBetween50() {
    userPrompt();
  if(rand(userPrompt() === false ) || isOdd(userPrompt()) === false ){
          userPrompt();
      }
}

function outputExecptUserInput() {
    for (var i = 1; i < 50; i += 2) {
        if (i % 2 !== 0) {
            console.log('Here is an odd number : ' + i);
        }
    }
}