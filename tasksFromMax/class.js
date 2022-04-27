'use strict';

class Car {
    constructor (name) {
        this.nameModel = name;
        this.speed = 90;
    }

    go() {
        console.log(this.nameModel + " " + "edet epta");
    }
    stop() {
        console.log("притормози пацанчик");
    }
    
}

const lex = {
    name: "Ruslan",
    move() {
        console.log(this.name + "ebashit");
    }
};

const art = {
    name: "artem",
};
Object.setPrototypeOf(art, lex);
art.move();

let lada = new Car("Lada");
console.log(lada);
lada.go();
console.log(Car.prototype); // {constructor: ƒ, go: ƒ, stop: ƒ}
console.log(Car.prototype.constructor); // Car
console.log(Car.prototype.constructor == Car); // true
console.log(Object.getOwnPropertyNames(Car.prototype)); //  ['constructor', 'go', 'stop']
console.log(Object.getOwnPropertyDescriptors(Car.prototype)); // all enumerable: false
console.log(Object.getOwnPropertyNames(lada));

Car.prototype.refueling = function() {
    console.log(this.nameModel + " " + "заправился ебать");
};

let bmw = new Car("Bmw");

console.log(Object.getOwnPropertyDescriptors(Car.prototype)); // refueling.enumerable: true!

for(let prop in lada) {
    console.log(prop); 
}

bmw.refueling();


function User(name) {
    this.name = name;
    this.password = "qwerty";
}
User.prototype.getPassword = function() {
    console.log(this.password);
};


let admin = new User("Петя");
Object.setPrototypeOf(admin, lex);
console.log(User.prototype);
admin.move();
console.log(User.prototype);


// Можем создать класс динамически

function createClass(name) {
    return class {
        sayHi() {
            console.log(name);
        }
    };
}

let Cat = createClass("Муся");
let myCat = new Cat();
console.log(Cat.prototype.constructor == Cat); // true
console.log(Object.getOwnPropertyNames(Cat.prototype)); // ['constructor', 'sayHi']
myCat.sayHi(); // Муся

class Owner extends Car {
    constructor(name) {
        super(name);
        this.owner = "Костя";
        this.getOwner = function() {
            console.log("Хозяин " + this.nameModel + " - " + this.owner);
        };
    }
}
let test = new Owner("Audi");
console.log(test.nameModel); // Audi
test.getOwner(); // Хозяин Audi - Костя


// Наследование через функциональный конструктор
function Alcohol(mark) {
    this.brand = mark;
}

function Beer(mark) {
    Alcohol.apply(this, arguments);
    this.testMark = mark + "Top beer";

}

let kozel = new Beer("Kozel");
console.log(kozel.brand); // Kozel

console.log(kozel.testMark); // KozelTop beer
