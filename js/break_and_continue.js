'use strict';

function isOdd(num) {
     return num % 2 !== 0;
}
// // console.log(isOdd(4), false); //false
// // console.log(isOdd(67), true); //true
//
function randomNum(num) {
    return num < 50 && num > 0;
}
// // console.log(randomNum(43), true); // (random)
// // console.log(randomNum(64), false); // (random)
//
function isOddBetween(num) {
    return  isOdd(num) === true && randomNum(num) === true;
}
// // console.log(isOddBetween(43), true); // true (odd tween)
// // console.log(isOddBetween(64), false); // false (odd twee)

//=================== Number 2 ====================

var userInput;

while (true) {
    userInput = parseFloat(prompt('odd and under 50, above 0 #'));
    if (isOddBetween(userInput)) {
        console.log('Your number to skip ' + userInput);
        break;
    }
}

for (var i = 1; i < 50; i += 2) {
    if(userInput === i) {
        console.log('Yikes Skipping number : ' + userInput);
        continue;
    }
    console.log(i);
}














// var userInput;
//
// while (true) {
//     userInput = prompt('odd and under 50, above 0 #');
//     if (isOddBetween(userInput)) {
//         console.log('Your number to skip ' + userInput);
//         break;
//     }
//
//     for (var i = 1; i < 50; i += 2) {
//         if (isOddBetween(userInput) === i) {
//             console.log('Yikes Skipping number : ' + username);
//             continue;
//         }
//         console.log(i);
//     }
// }