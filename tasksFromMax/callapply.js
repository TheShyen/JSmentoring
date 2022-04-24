'use strict';

const user1 = {
	name: 'Руслан',
	age: 18,
};
const user2 = {
	name: 'Лёха',
	age: 20,
};

function getInfo(phrase) {
	return `Имя: ${this.name}, Возраст: ${this.age}, Характеристика: ${phrase}`;
	
}


Function.prototype.myBind = function(context, ...rest) {
	let fun = this;
	return function (...arr) {
		return fun.myCall(context, arr.concat(rest));
	};
};

Function.prototype.myCall = function(context, arg) {
	context.fun = this;
	return context.fun(arg);
};

Function.prototype.myApply = function(context, ...args) {
	context.fun = this;
	return context.fun(...args);
};

const testBind1 = getInfo.myBind(user1, "Лох какой-то");
const testBind2 = getInfo.myBind(user2);
console.log(testBind1());
console.log(testBind2());
console.log(getInfo.myCall(user1, "Лох какой-то"));
console.log(getInfo.myCall(user2));
console.log(getInfo.myApply(user1, "Лох какой-то"));
console.log(getInfo.myApply(user2));
