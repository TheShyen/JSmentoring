"use strict";

function isInteger(num) {
    return (num ^ 0) === num;
}

alert(isInteger(1)); // true
alert(isInteger(1.5)); // false
alert(isInteger(-0.5)); // false
