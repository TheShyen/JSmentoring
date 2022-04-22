'use strict';

const obj = {
    testProp: 123,
};

Object.defineProperty(obj, 'logTestProp', {
    value: function() {
        return console.log(this.testProp);
    }
}); // TODO

obj.logTestProp(); // expect 123
obj.testProp = 345;
obj.logTestProp(); // expect 345