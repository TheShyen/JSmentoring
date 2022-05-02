'use strict';

// 1. Почему одни и те же имена свойств, но не ругается интерпретатор?
// 2. Что такое геттеры и есть ли тут они? Что такое методы и есть ли тут они?
// 3. Что такое класс и экземпляр класса?
// 4. Куда записывается каждое свойство?
// 5. Что выведется в результате выполнения for и spread? Почему?

class Item {
    data = 10; // свойство объекта при создании
    get name() {
        return "hi!";
    }
    get() {} // записывается в Item.prototype
    static data = 20; // записыватеся как Item.data
    static get() {} // записывается как Item.get
}
let a = new Item();
//
for (const key in Item) { console.log(key); } // data
for (const key in new Item()) { console.log(key); } // data 
//
console.log({...new Item()}); // data: 10
console.log({...Item}); // data: 20
console.log(Item.prototype.name); // геттеры в прототипах
console.log(a.name);


class Car {
    
    constructor (name) {
        this.nameModel = name;
        this.speed = 90;
    }
    static value = 50;
    static get() {}
    go() {
        console.log(this.nameModel + " " + "edet epta");
    }
    stop() {
        console.log("притормози пацанчик");
    }
    
}
let lada = new Car("Lada");
Car.prototype.refueling = function() {
    console.log(this.nameModel + " " + "заправился ебать");
};
Car.prototype.ref = function() {
    console.log(this.nameModel + " " + "заправился");
};

for(let prop in lada) {
    console.log(prop); // nameModel, speed, refueling
}

for(let prop in lada) {
    if(lada.hasOwnProperty(prop)) {
        console.log(prop); // nameModel, speed
    }
}
// spread берет только собственные (не наследуемые) и перечислимые свойства объекта
console.log({...lada}); // {nameModel: 'Lada', speed: 90}
console.log({...Car}); // здесь только статическое поле


// Ответы: 
// 1) Потому что data это свойвство объекта и создатеся при вызове new, а static data, как свойство класса
// 2) Геттеры - функции которые срабатывают при чтении свойства, то есть без(), как в обычных функциях.
//    Здесь гетторов нет, это методы. Методы - это свойства объекта, которые являются функциями.
// 3) Класс - это специальная функция, некий шаблон для создания объектов. 
//    Экземпляр-это уже объект который имеет все методы и свойства описанные в классе.
// 4) get() записывается в prototype, а static get() записывается как метод самого класс. data создается оператором new, 
//    перед запуском контсруктора, это именно свойство объекта, static data - свойство не истанца, а класса.
// 5) Отвечу устно)