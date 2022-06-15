"use strict";
// task 2
function clear(elem) {
    elem.innerHTML = "";
}
// task 4

let ul = document.createElement("ul");
document.body.append(ul);
let text = prompt("Введи что-то, дубина");

while (text != "" && text != null) {
    let li = document.createElement("li");
    li.innerHTML = text;
    ul.append(li);
    document.body.append(li);
    text = prompt("Введи что-то, дубина");
}
// task 5

let data = {
    Рыбы: {
        форель: {},
        лосось: {},
    },

    Деревья: {
        Огромные: {
            секвойя: {},
            дуб: {},
        },
        Цветковые: {
            яблоня: {},
            магнолия: {},
        },
    },
};

function createTree(container, obj) {
    container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
    if (!Object.keys(obj).length) {
        return;
    }
    let ul = document.createElement("ul");

    for (let key in obj) {
        let li = document.createElement("li");
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
            li.append(childrenUl);
        }

        ul.append(li);
    }

    return ul;
}

let container = document.getElementById("container");
createTree(container, data);
// task 6

let lis = document.getElementsByTagName("li");

for (let li of lis) {
    let descendantsCount = li.getElementsByTagName("li").length;
    if (!descendantsCount) continue;

    li.firstChild.data += " [" + descendantsCount + "]";
}
// task 9 

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// task 10

let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);