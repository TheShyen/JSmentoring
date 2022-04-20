'use strict';

let head = {
    glasses: 1,
};
  
let table = {
    pen: 3,
    __proto__: head,
};
  
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};
  
let pockets = {
    money: 2000,
    __proto__: bed,
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1


let animal = {
    eat() {
        this.full = true;
    }
};
  
let rabbit = {
    __proto__: animal
};
  
rabbit.eat(); // свойстов full получит объект rabbit

let hamster = {
    stomach: [],
  
    eat(food) {
        this.stomach = [food];
    }
};
  
let speedy = {
    __proto__: hamster
    };
  
let lazy = {
    __proto__: hamster
};
  
// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple
  
// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // теперь пусто