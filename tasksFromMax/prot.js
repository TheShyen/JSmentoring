'use strict';

/* class BasicItem {
    constructor(_testProp) {
        this._parentProp = _testProp + 100;
    }

    getParentProp() {
        return this._parentProp;
    }
}
//
class Item extends BasicItem {
    static data = 5;

    constructor(_testProp) {
        super(_testProp);
        this._testProp = _testProp;
    }

    getProp() {
        return this._testProp + this.getParentProp() + Item.data;
    }
}
//
console.log(new Item(1000).getProp()); // 2105 */

const baseItem = {
    cost: 11111,
    getParentPropp() {
        this._parentPropp = this._testPropp + 100;
        return this._parentPropp;
    },
    getCost() {
        return this.cost;
    }
};

const item = {  
    data: 5,
    getPropp(_testPropp) {
        this._testPropp = _testPropp;
        return this._testPropp + this.getParentPropp() + this.data;
    }
};
Object.setPrototypeOf(item, baseItem);
//Object.setPrototypeOf(baseItem, item); TypeError: Cyclic __proto__ value
// item.__proto__= baseItem;


console.log(item.getPropp(1000)); // 2105
console.log(item.getParentPropp()); // 1100



