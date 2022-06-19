// task 1

let elem = document.getElementById("field");
let coord = elem.getBoundingClientRect();
alert(Math.round(coord.top) + "   " + coord.left);
alert(Math.round(coord.right) + "   " + Math.round(coord.bottom));
alert([coord.left + elem.clientLeft, Math.round(coord.top + elem.clientLeft)]);
alert([
    Math.round(coord.right - elem.clientLeft),
    Math.round(coord.bottom - elem.clientTop),
]);

// task2

function positionAt(anchor, position, elem) {
    let anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;

        case "right":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;
    }
}

function showNote(anchor, position, html) {
    let note = document.createElement("div");
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}


let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
