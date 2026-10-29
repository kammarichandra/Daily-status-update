
/* =====================================
   TASK 1: DISPLAY MESSAGE WHEN KEY IS PRESSED
===================================== */

const keyboardInput = document.getElementById("keyboardInput");

const keyMessage = document.getElementById("keyMessage");

keyboardInput.addEventListener("keydown", function (event) {

    keyMessage.textContent = `You pressed: ${event.key}`;

});


/* =====================================
   TASK 2: DETECT ENTER, ESCAPE, BACKSPACE
===================================== */

keyboardInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        keyMessage.textContent = "You pressed Enter!";

    } else if (event.key === "Escape") {

        keyMessage.textContent = "You pressed Escape!";

    } else if (event.key === "Backspace") {

        keyMessage.textContent = "You pressed Backspace!";

    }

});


/* =====================================
   TASK 3: DISPLAY MOUSE COORDINATES
===================================== */

const mouseArea = document.getElementById("mouseArea");

const mouseCoordinates =
    document.getElementById("mouseCoordinates");

mouseArea.addEventListener("mousemove", function (event) {

    const x = event.clientX;

    const y = event.clientY;

    mouseCoordinates.textContent = `X: ${x} | Y: ${y}`;

});


/* =====================================
   TASK 4: CHANGE COLOR ON MOUSEENTER
===================================== */

const colorBox = document.getElementById("colorBox");

colorBox.addEventListener("mouseenter", function () {

    colorBox.style.backgroundColor = "lightgreen";

});


/* =====================================
   TASK 5: RESTORE COLOR ON MOUSELEAVE
===================================== */

colorBox.addEventListener("mouseleave", function () {

    colorBox.style.backgroundColor = "orange";

});


/* =====================================
   TASK 6: KEYBOARD-CONTROLLED MOVEMENT
===================================== */

const character = document.getElementById("character");

const gameArea = document.getElementById("gameArea");

const movementMessage =
    document.getElementById("movementMessage");

let x = 0;
let y = 0;

const step = 10;

document.addEventListener("keydown", function (event) {

    // Ignore arrow keys when typing in an input field
    if (event.target.tagName === "INPUT") {
        return;
    }

    const maxX = gameArea.clientWidth - character.offsetWidth;

    const maxY = gameArea.clientHeight - character.offsetHeight;

    switch (event.key) {

        case "ArrowUp":
            y = Math.max(0, y - step);
            break;

        case "ArrowDown":
            y = Math.min(maxY, y + step);
            break;

        case "ArrowLeft":
            x = Math.max(0, x - step);
            break;

        case "ArrowRight":
            x = Math.min(maxX, x + step);
            break;

        default:
            return;

    }

    // Prevent page scrolling with arrow keys
    event.preventDefault();

    character.style.left = `${x}px`;

    character.style.top = `${y}px`;

    movementMessage.textContent =
        `Character Position: X=${x}, Y=${y}`;

});
