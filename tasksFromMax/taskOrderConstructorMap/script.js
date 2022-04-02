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
    this.log = [];
    this.map = new Map();
    let counter = 0;

    this.addItem = function(item) {
        let date = new Date();
        let time  = date.getHours() + ":" +  date.getMinutes() + ":" +  date.getSeconds();
        if (this.isLocked) {
            console.log("Нельзя добавлять позиции");
            return;
        }
        this.productList[item.name] = item.price ;
        this.countByName[item.name] = (this.countByName[item.name] || 0) + 1;
        this.log.push(["Время: "+ time + " Добавлено: "+ item.name + " в количестве " + 1 + " шт."]);
        /* this.map.set(counter, this.log = [["Время:","Добавлено:", item.name, 1,"шт."]]); */
        counter++;


    };

    this.removeItem = function(item, count) { 
        let date = new Date();
        let time  = date.getHours() + ":" +  date.getMinutes() + ":" +  date.getSeconds();
        if (this.isLocked || this.countByName[item.name] < count) {
            console.log("Чек заблокирован");
            return;
        }
        if (count == undefined) {
            delete this.productList[item.name];
            count = this.countByName[item.name];
        } else {
            this.countByName[item.name] -= count;
        }
        this.log.push(["Время: " + time + " Удалено: " + item.name + " в количестве " + count + " шт."]);
        /* this.map.set(counter, this.log = [["Время:","Удалено:", item.name, count ,"шт."]]); */
        counter++;
           
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
        for (let i = this.log.length - 1; i >= 0; i--) {
            console.log(this.log[i][0]);
        }
   
    };

}
let check = new OrderConctructor();
check.addItem(beer);
check.addItem(milk);
check.addItem(beer);
check.addItem(chips);
check.addItem(beer);
check.addItem(milk);
check.addItem(chips);
check.addItem(milk);
check.addItem(milk);
check.removeItem(milk, 2);
check.addItem(milk);
check.addItem(chips);
check.addItem(chips);
check.lockOrder();
check.addItem(chips);
check.addItem(chips);
check.unlockOrder();
check.removeItem(beer);
check.getCheck();
check.getLog();

