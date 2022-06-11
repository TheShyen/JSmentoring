/*
Как найти?…
1. Таблицу с id="age-table".
2. Все элементы label внутри этой таблицы (их три).
3. Первый td в этой таблице (со словом «Age»).
4. Форму form с именем name="search".
5. Первый input в этой форме.
6. Последний input в этой форме.
*/

console.log("1");
const elem1 = document.getElementById("age-table");
console.log(elem1);

console.log("2");
const elem2 = document.querySelectorAll("#age-table label");
console.log(elem2);

console.log("3");
const elem3 = document.querySelector("#age-table td");
console.log(elem3);

console.log("4");
const elem4 = document.querySelector('form[name="search"]');
console.log(elem4);

console.log("5");
const elem5 = document.querySelector("input");
console.log(elem5);

console.log("6");
const elem6 = Array.from(document.querySelectorAll("input")).at(-1);
console.log(elem6);
