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
    this.productList = {};
    this.count = 0;
    this.countByName= {};
    this.isLocked = false;
    let now = new Date();
    let Hour = now.getHours();
    let Minutes = now.getMinutes();
    let Seconds = now.getSeconds();
    this.callData = {};
    this.array = [];

    this.addItem = function(item) {
            if (this.isLocked) {
                console.log("Нельзя добавлять позиции");
                return;
            }
            this.productList[item.name] = item.price ;
            this.countByName[item.name] = (this.countByName[item.name] || 0) + 1;
            this.callData.date = "Время: "+Hour+":"+Minutes+":"+Seconds;
            this.callData[item.name] = this.countByName[item.name];
    };

    this.removeItem = function(item, count) {
        if (this.isLocked || this.countByName[item.name] < count) {
            console.log("Чек заблокирован");
            return;
        }
        if (count == undefined) {
            delete this.productList[item.name];
        } else {
            this.callData.remove = {};
            this.callData.remove[item.name] = count;
            Object.entries(this.callData.remove);
            this.array = Object.entries(this.callData);
            this.countByName[item.name] -= count;
        }
        
    };

     this.getCheck = function() {
        let total = 0;
        for (let key in this.productList) {
            const price = this.productList[key];
            const quantity = this.countByName[key];
            console.log ("---",key, "---");   
            console.log("Цена:", price, "|", "Кол-во:", quantity);
            total += price * quantity;
            this.count +=  quantity;
        }
        console.log("Всего товаров в чеке: ", this.count);
        console.log("Общий итог:", total, "рублей.");
    };

    this.lockOrder = function() {
        this.isLocked = true;
    };

    this.unlockOrder = function() {
        this.isLocked = false;
    };

    this.getLog = function() {
        let map = new Map();
        console.log(map.set("add", this.array));



       /*  for (let key in this.productList) {
            console.log("Время: "+Hour+":"+Minutes+":"+Seconds, "Добавлено:", key, this.countByName[key], "шт.");
        } */
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
check.removeItem(milk, 2);
check.removeItem(beer, 1);
check.getCheck();
check.getLog();

