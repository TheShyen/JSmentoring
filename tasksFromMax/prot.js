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

function BasicItem(_testProp) {
    this._parentProp = _testProp + 100;

}
BasicItem.prototype.getParentProp = function() {
    return this._parentProp;
};

function Item(_testProp) {
    BasicItem.apply(this, arguments);
    this._testProp = _testProp;
}
Item.data = 5;


Item.prototype = Object.create(BasicItem.prototype);

Item.prototype.getProp = function() {
    return this._testProp + this.getParentProp() + Item.data;
};

console.log(new Item(1000).getProp()); // 2105
console.log(Item.prototype); // getProp: ƒ ()
                                //[[Prototype]]: Object
                                    //getParentProp: ƒ ()

