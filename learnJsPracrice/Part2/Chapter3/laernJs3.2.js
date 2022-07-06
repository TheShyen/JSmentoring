// task 1
"use strict";
let tooltip;

document.onmouseover = function (event) {
    let anchorElem = event.target.closest("[data-tooltip]");

    if (!anchorElem) {
        return;
    }
    tooltip = showTooltip(anchorElem, anchorElem.dataset.tooltip);
};

document.onmouseout = function () {
    if (tooltip) {
        tooltip.remove();
        tooltip = false;
    }
};

function showTooltip(anchorElem, html) {
    let tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = html;
    document.body.append(tooltipElem);

    let coords = anchorElem.getBoundingClientRect();

    let left =
        coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) {
        left = 0;
    }

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + anchorElem.offsetHeight + 5;
    }

    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";

    return tooltipElem;
}

// task 2

class HoverIntent {
    constructor({ sensitivity = 0.1, interval = 100, elem, over, out }) {
        this.sensitivity = sensitivity;
        this.interval = interval;
        this.elem = elem;
        this.over = over;
        this.out = out;
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.trackSpeed = this.trackSpeed.bind(this);

        elem.addEventListener("mouseover", this.onMouseOver);

        elem.addEventListener("mouseout", this.onMouseOut);
    }

    onMouseOver(event) {
        if (this.isOverElement) {
            return;
        }

        this.isOverElement = true;

        this.prevX = event.pageX;
        this.prevY = event.pageY;
        this.prevTime = Date.now();

        elem.addEventListener("mousemove", this.onMouseMove);
        this.checkSpeedInterval = setInterval(this.trackSpeed, this.interval);
    }

    onMouseOut(event) {
        if (!event.relatedTarget || !elem.contains(event.relatedTarget)) {
            this.isOverElement = false;
            this.elem.removeEventListener("mousemove", this.onMouseMove);
            clearInterval(this.checkSpeedInterval);
            if (this.isHover) {
                this.out.call(this.elem, event);
                this.isHover = false;
            }
        }
    }

    onMouseMove(event) {
        this.lastX = event.pageX;
        this.lastY = event.pageY;
        this.lastTime = Date.now();
    }

    trackSpeed() {
        let speed;

        if (!this.lastTime || this.lastTime == this.prevTime) {
            speed = 0;
        } else {
            speed =
                Math.sqrt(
                    Math.pow(this.prevX - this.lastX, 2) +
                        Math.pow(this.prevY - this.lastY, 2)
                ) /
                (this.lastTime - this.prevTime);
        }

        if (speed < this.sensitivity) {
            clearInterval(this.checkSpeedInterval);
            this.isHover = true;
            this.over.call(this.elem);
        } else {
            this.prevX = this.lastX;
            this.prevY = this.lastY;
            this.prevTime = this.lastTime;
        }
    }

    destroy() {
        elem.removeEventListener("mousemove", this.onMouseMove);
        elem.removeEventListener("mouseover", this.onMouseOver);
        elem.removeEventListener("mouseout", this.onMouseOut);
    }
}
