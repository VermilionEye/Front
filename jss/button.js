"use strict"

// var x, y;

// document.querySelector('.block').onmousemove = function(event) {
//     event = event || window.event; // кроссбраузерность
//     // console.log(event); // вывод в консоль
//     x = document.querySelector('.x').innerHTML = event.offsetX;
//     y = document.querySelector('.y').innerHTML = event.offsetY;
//     alert(x);
// }

var pressed = false;

function changecolor(_this) {
    if (_this.style.backgroundColor == 'red') {
        pressed = false;
        _this.style.backgroundColor = 'lightgray';

    } else {
        pressed = true;
        _this.style.backgroundColor = 'red';
    }
}
