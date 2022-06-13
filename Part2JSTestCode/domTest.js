"use strict";

console.log(document.body); // <body>...</body>

for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}
/* body
domTest.js:6 #text
domTest.js:6 h1
domTest.js:6 #text
domTest.js:6 h2
domTest.js:6 #text
domTest.js:6 div
domTest.js:6 #text
domTest.js:6 script */

console.log(document.body.childNodes[0] === document.body.firstChild); // true
console.log(Array.isArray(document.body.childNodes)); // false 
const nodesArray = document.body.childNodes;
console.log(nodesArray); // NodeList(8) псевдо-массив
NodeList.prototype.at = Array.prototype.at;
console.log(nodesArray.at(-1)); // script

let resultForOf = [];
for (let item of document.body.childNodes) {
    resultForOf.push(item);
}

console.log(resultForOf); // [text, h1, text, h2, text, div, text, script]
console.log(resultForOf.sort()); // [div, h1, h2, script, text, text, text, text]

const arrayFromNodeList = Array.from(document.body.childNodes);
console.log(arrayFromNodeList.sort()); // [div, h1, h2, script, text, text, text, text]
console.log(resultForOf.sort()); // [div, h1, h2, script, text, text, text, text]
console.log(arrayFromNodeList.sort() == resultForOf.sort()); // false
console.log(Array.isArray(arrayFromNodeList)); // true
console.log(Array.isArray(resultForOf)); // true

console.log(document.head.nextSibling); // #text
console.log(document.head.nextSibling.nextSibling); // <body>...</body>

console.log(document.body.constructor.name); // HTMLBodyElement
console.log(toString(document.body)); // [object Undefined]
console.log(document.body instanceof HTMLElement); // true
console.log(document.body instanceof EventTarget); // true
console.log(document.body instanceof Node); // true
