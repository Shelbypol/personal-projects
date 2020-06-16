'use strict';

// Wrap every letter in a span
let textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.ml12 .letter',
        translateX: [0,40],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    }).add({
    targets: '.ml12 .letter',
    translateX: [-30,0],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1000,
    delay: (el, i) => 50  * i
});

// $(".typingAnimation").css("transform", "rotate(90deg");

// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml3');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//
// anime.timeline({loop: true})
//     .add({
//         targets: '.ml3 .letter',
//         opacity: [0,1],
//         easing: "easeInOutQuad",
//         duration: 2250,
//         delay: (el, i) => 150 * (i+1)
//     }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
// });