'use strict';

function sum(a) {

    return function(b) {
        return a + b; 
    };
  
}
  
alert( sum(1)(2) );
alert( sum(5)(-1) );




function inBetween(a, b) {
    return function(f) {
        return f >= a && f <= b;
    }; 
}





function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];




function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => alert(user.name));




function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function() {
            alert( j );
        }; 
      shooters.push(shooter);
      i++;
    }
    return shooters;
}
  
  let army = makeArmy();
  
  army[0]();
  army[5]();