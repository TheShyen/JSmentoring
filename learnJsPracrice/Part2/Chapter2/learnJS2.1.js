//task 1
function hundle() {
    text.innerHTML = "";
}
hider.addEventListener("click", hundle);

// task 2

function hundle() {
    hider.remove();
}
hider.addEventListener("click", hundle);

// task 4

field.onclick = function (event) {
    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) ballCoords.top = 0;

    if (ballCoords.left < 0) ballCoords.left = 0;

    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + "px";
    ball.style.top = ballCoords.top + "px";
};

// task 6 

let panes = document.querySelectorAll('.pane');
for(let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.firstChild.onclick = () => pane.remove();
}