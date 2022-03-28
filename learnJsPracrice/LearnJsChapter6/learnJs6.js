'use strict';

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

alert (factorial(100));

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
alert( fib(3) );
alert( fib(7) );
alert( fib(77) );


let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
function printReverseList(list) {
  
  if (list.next) {
    printReverseList(list.next);
  }
  
    alert(list.value);
  }
  
printReverseList(list);