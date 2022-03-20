'use strict';
const beer = {
    name: "Пиво",
    price: 120,
    counts: 5,
};

const milk = {
    name: "Молоко",
    price: 80,
    counts: 2,
};

const chips = {
    name: "Чипсы",
    price: 99,
    counts: 7,
};

let list = {};
let count = 0;
let isLocked = false;

function Shop (addItem, removeItem, getCheck, lockOrder, unlockOrder) {

    this.addItem = function(item) {
        if (isLocked == false){
            list[item.name] = { [item.price] : item.counts };
        } else {
            console.log("Запрещено добавлять позиции");
        }
        
    };

    this.removeItem = function(item, coun) {
        if ((isLocked == false) && (list[item.name][item.price] > coun)) {
            if (coun == undefined || coun == '' || list[item.name][item.price] == coun) {
                delete list[item.name];
            } else {
                list[item.name][item.price] -= coun;
            }
        } else {
            console.log("Запрещено убирать позиции");
        }  
    };

    this.getCheck = function() {
        let total = 0;
        for (let key in list) {
            console.log ("---",key, "---");
            for (let pr in list[key]) {
                console.log("Цена:", pr, "|", "Кол-во:", list[key][pr]);
                count += +list[key][pr];
                total += +(pr * list[key][pr]);
                console.log("Итого за", list[key][pr], "шт. -", (pr * list[key][pr]), "рублей.");
            }
        }
        console.log("Всего товаров в чеке: ", count);
        console.log("Общий итог:", total, "рублей.");
    };

    this.lockOrder = function() {
        isLocked = true;
    };

    this.unlockOrder = function() {
        isLocked = false;
    };
}

let check = new Shop();
check.addItem(beer);
check.addItem(milk);
check.lockOrder();
check.addItem(chips);
check.unlockOrder();
check.removeItem(beer, 10);
check.getCheck();

/* Что выводит:
Запрещено добавлять позиции
 --- Пиво ---
 Цена: 120 | Кол-во: 4
 Итого за 4 шт. - 480 рублей.
 --- Молоко ---
 Цена: 80 | Кол-во: 2
 Итого за 2 шт. - 160 рублей.
 Всего товаров в чеке:  6
 Общий итог: 640 рублей. 
 */