'use strict';
/* let a = +prompt("Введите превое число: "),
    b = +prompt("Введите второе число: "),
    sum = a + b;
console.log(+sum.toFixed(4)); */

/* function readNumber() {
    let num = prompt("Введите число: ");
    while (+num != Number(num)) {
        if (num === null || num == "") {
            return null;
        }
        num = prompt("Введите число: ");
        return +num;
    }

    
}

alert (readNumber()); */

/* function random(min, max) {
    return Math.random() * (max - min) + min;
}
alert(random(1, 10)); */

/* function random(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min) + min);
}
alert(random(1, 10)); */



/* function ucFirst(str) {
    return (str[0].toUpperCase()) + str.slice(1);
}
alert (ucFirst("вася")); */


/* function checkSpam(str) {
    
    return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('buy xxxxx now'));
alert(checkSpam("innocent rabbit")); */


/* function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "...";
    } else {
        return str;
    }
}
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); */


/* function extractCurrencyValue(str) {
    return +str.slice(1);
}
alert(extractCurrencyValue("$120")); */



/* Массивы */

/* let styles = ["Джаз", "Блюз", "Блюз", "Блюз"];
alert(styles);

styles.push("Рок-н-Ролл");
alert(styles);

let count = Math.floor(styles.length / 2);
styles[count] = "Классика";
alert(styles);

alert(styles.shift());

styles.unshift("Рэп", "Рэгги");
alert(styles);
 */


/* function sumInput () {
    let arr = [];
    let num = +prompt("Введите число: ", 0);
    let sum = 0;
    while (+num === Number(num)){
        arr.push(+num);
        if (num === null || num == "") {
            break;
        }
        num = prompt("Введите число: ", 0);
    }
    for (let k of arr) {
        sum += k;
    }
    alert(+sum);
}
sumInput(); */