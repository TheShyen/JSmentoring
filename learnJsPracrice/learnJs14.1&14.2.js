"use strict";

let user = {
    name: "John",
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            } else {
                throw new ReferenceError(
                    `Такого свойства не существует: "${prop}"`
                );
            }
        },
    });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // ReferenceError: Такого свойства не существует: "age"

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length;
        }
        return Reflect.get(target, prop, receiver);
    },
});

alert(array[-1]); // 3
alert(array[-2]); // 2

const makeObservable = (target) => {
    let observeHandler = null;
    return new Proxy(target, {
        get(target, property, receiver) {
            if (property === "observe") {
                return (handler) => (observeHandler = handler);
            }
            return Reflect.get(...arguments);
        },
        set(target, property, value, receiver) {
            if (observeHandler) {
                observeHandler(property, value);
            }
            return Reflect.set(...arguments);
        },
    });
};

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
});

user.name = "John";

let calc = prompt("Введите арифметическое выражение:");

alert(eval(calc));
