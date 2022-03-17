'use strict';
const beer = {
    name: "Пиво",
    price: 120,
    counts: 1,
};

const milk = {
    name: "Молоко",
    price: 80,
    counts: 2,
};

const chips = {
    name: "Чипсы",
    price: 99,
    counts: 1,
};

let list = {};
let count = 0;

function Shop (addItem, removeItem, getCheck, lockOrder, unlockOrder) {
    this.addItem = function(item) {
        list[item.name] = { [item.price] : item.counts };
    };

    this.removeItem = function(item) {
        delete list[item.name];
        
    };

    this.getCheck = function() {
        let total = 0;
        for (let key in list) {
            console.log (key);
            for (let pr in list[key]) {
                console.log("Цена:", pr, "|", "Кол-во:", list[key][pr]);
                count += +list[key][pr];
                total += +(pr * list[key][pr]);
            }
        }
        console.log("Всего товаров в чеке: ", count);
        console.log("Общий итог:", total);
    };
}

let check = new Shop();
check.addItem(beer);
check.addItem(milk);
check.addItem(chips);
check.removeItem(milk,1);
check.getCheck();