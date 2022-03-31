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
    this.callDataAdd = {};
    this.callDataRemove = {};

    this.addItem = function(item) {
            if (this.isLocked) {
                console.log("Нельзя добавлять позиции");
                return;
            }
            this.productList[item.name] = item.price ;
            this.countByName[item.name] = (this.countByName[item.name] || 0) + 1;
            this.callDataAdd[item.name] = this.countByName[item.name];

    };

    this.removeItem = function(item, count) {
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
        this.callDataRemove[item.name] = count;
           
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
        let addLog = Object.entries(this.callDataAdd);
        let removeLog = Object.entries(this.callDataRemove);
        console.log(addLog);
        console.log(removeLog);
        for (let i = addLog.length - 1; i >= 0; i--){
            let data = new Date();  
            let time  = data.getHours() + ":" +  data.getMinutes() + ":" +  data.getSeconds();
            console.log("Время:", time, "Добавлено:", addLog[i][0], addLog[i][1], "шт.");
        }

        for (let i = removeLog.length - 1; i >= 0; i--){
            let data = new Date();  
            let time  = data.getHours() + ":" +  data.getMinutes() + ":" +  data.getSeconds();
            console.log("Время:", time, "Удалено:", removeLog[i][0], removeLog[i][1], "шт.");
        }
   
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
check.removeItem(beer);
check.removeItem(milk, 2);
check.getCheck();
check.getLog();

