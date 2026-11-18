
//  Selecting Html Elements

function changeText() {

    document.getElementById("heading").innerText = "Selecting Html Elements";

    document.querySelector(".message").style.color = "blue";

    let paragraphs = document.querySelectorAll(".message");

    paragraphs.forEach(function (p) {

        p.style.fontWeight = "bold";

    });
}

// Dom Manipulation and Dynamic Content 

let title = document.getElementById("title");

document.getElementById("changeBtn").addEventListener("click", function () {
    title.innerText = "Welcome to DOM";
    title.style.color = "green";
    title.style.backgroundColor = "lightyellow";
});

// creating and removing element 

let input = document.getElementById("skill");
let list = document.getElementById("skillList");

document.getElementById("addBtn").addEventListener("click", function () {

    if (input.value.trim() === "") {
        alert("Please enter a skill");
        return;
    }

    let li = document.createElement("li");

    li.textContent = input.value;

    list.appendChild(li);

    input.value = "";
});

document.getElementById("removeBtn").addEventListener("click", function () {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});