
let menuInput = document.getElementById("menu");
let list = document.getElementById("list");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let text = menuInput.value.trim();

    if (text) {
        let li = document.createElement("li");
        li.textContent = text;

        list.appendChild(li);
        menuInput.value = "";
    }

});

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        alert(`you clicked: ${event.target.textContent}`);

        console.log("you clicked: ", event.target.textContent)
    }
});