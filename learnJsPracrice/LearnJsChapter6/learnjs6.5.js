'use strict';

function makeCounter() {
    let count = 0;
  
    function counter() {
        return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;

    return counter;
}
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  alert( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  alert( counter() ); // 10 (вместо 11)



function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
printNumbers(5, 10);


function delay(f, ms) {

    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };
  
}
  
let f1000 = delay(alert, 1000);
  
f1000("test");


function debounce(f, ms) {
    let isCooldown = false;
    return function() {
        if (isCooldown) {
            return;
        }
        f.apply(this, arguments);
  
        isCooldown = true;
  
        setTimeout(() => isCooldown = false, ms);
    };
  
}