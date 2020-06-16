'use strict';

// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml1 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//
// anime.timeline({loop: true})
//     .add({
//         targets: '.ml1 .letter',
//         scale: [0.3,1],
//         opacity: [0,1],
//         translateZ: 0,
//         easing: "easeOutExpo",
//         duration: 600,
//         delay: (el, i) => 70 * (i+1)
//     }).add({
//     targets: '.ml1 .line',
//     scaleX: [0,1],
//     opacity: [0.5,1],
//     easing: "easeOutExpo",
//     duration: 700,
//     offset: '-=875',
//     delay: (el, i, l) => 80 * (l - i)
// }).add({
//     targets: '.ml1',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
// });

// Wrap every letter in a span
// let textWrapper = document.querySelector('.ml12');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//
// let animation = anime.timeline({loop: true})
//     .add({
//         targets: '.ml12 .letter',
//         translateX: [0,40],
//         translateZ: 0,
//         opacity: [0,1],
//         easing: "easeOutExpo",
//         // duration: delay,
//         // complete: function() { animation.restart(); }
//         duration: 1000,
//         delay: (el, i) => 3 * i
//     })
//     .add({
//     targets: '.ml12 .letter',
//     translateX: [-30,0],
//     opacity: [1,0],
//     easing: "easeInExpo",
//     duration: 1000,
//     delay: (el, i) => 3 * i
// });


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
    }).add({
    targets: '.ml3 .letter',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});


