'use strict'; 
function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(), ms);
    });
}
  
delay(3000).then(() => alert('выполнилось через 3 секунды'));


function addMessage() {
    showCircle(150, 150, 100).then(div => {
        div.classList.add('message-ball');
        div.append("Hello, world!");
    });
}

function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);
    return new Promise(resolve => {
        setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
        div.addEventListener('transitionend', () => resolve(div), {once:true});
        });
    });
    
}