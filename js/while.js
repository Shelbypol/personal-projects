'use strict';

//============== While ==============
// var i = 2;
// var powerOfTwo = Math.pow(i, 17);
// while(i < powerOfTwo ){
//     console.log(i);
//     i *= 2;
// }

//=========== Do While ==============

// var conesToSell = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//
//     console.log(conesToSell + ' cones left to sell');
//     console.log (conesBought + ' cones sold');
//     console.log(''); //for console readability only...do not need
//
//     if( conesToSell < conesBought ){
//         console.log('Cannot sell you ' + conesBought + ' I only have ' + conesToSell + ' left');
//     }
//
//     if(conesToSell === 0 ){
//         console.log('Yay, I sold them all!');
//     }
//
//     conesToSell = conesToSell - conesBought;
// } while (conesToSell >= 0);