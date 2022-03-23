'use strict';
const beer = {
    name: "Пиво",
    price: 120,
};

const milk = {
    name: "Молоко",
    price: 80,
};

const chips = {
    name: "Чипсы",
    price: 99,
};


function OrderConctructor() {
    this.list = {};
    this.count = 0;
    this.total = 0;
    this.countByName= {};
    this.isLocked = false;

    this.addItem = function(item) {
            if (this.isLocked) {
                console.log("Нельзя добавлять позиции");
                return;
            }
            this.list[item.name] = item.price ;
            this.countByName[item.name] = (this.countByName[item.name] || 0) + 1;      
    };

    this.removeItem = function(item, count) {
        if (this.isLocked || this.countByName[item.name] < count) {
            console.log("Невозможно убрать больше позиций, чем имеется");
            return;
        }
        if (count == undefined) {
            delete this.list[item.name];
        } else {
            this.countByName[item.name] -= count;
        }
        
    };

     this.getCheck = function() {
        for (let key in this.list) {
            const price = this.list[key];
            const quantity = this.countByName[key];
            console.log ("---",key, "---");   
            console.log("Цена:", price, "|", "Кол-во:", quantity);
            this.total += price * quantity;
            this.count +=  quantity;
        }
        console.log("Всего товаров в чеке: ", this.count);
        console.log("Общий итог:", this.total, "рублей.");
    };

    this.lockOrder = function() {
        this.isLocked = true;
    };

    this.unlockOrder = function() {
        this.isLocked = false;
    };

}
let check = new OrderConctructor();
check.addItem(beer);
check.addItem(beer);
check.addItem(beer);
check.addItem(milk);
check.addItem(milk);
check.addItem(milk);
check.addItem(milk);
check.addItem(chips);
check.addItem(chips);
check.lockOrder();
check.addItem(chips);
check.addItem(chips);
check.unlockOrder();
check.removeItem(beer, 1);
check.getCheck();

