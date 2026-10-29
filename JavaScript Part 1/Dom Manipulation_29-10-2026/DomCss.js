const employeeImage = document.getElementById("employeeImage");
const changeImageBtn = document.getElementById("changeImageBtn");

changeImageBtn.addEventListener("click",()=>{
    employeeImage.setAttribute("src","https://placehold.co/150/007bff/ffffff?text=Employee");
    console.log("img updated")
})


/* =====================================
   TASK 2: UPDATE ELEMENT ATTRIBUTES
===================================== */

// Update image alt attribute

employeeImage.setAttribute(
    "alt",
    "Updated Employee Profile"
);

// Update image width

employeeImage.setAttribute("width", "200");


/* =====================================
   TASK 3: RETRIEVE ATTRIBUTES
===================================== */

const imageSource = employeeImage.getAttribute("src");

const imageAlt = employeeImage.getAttribute("alt");

console.log("Image Source:", imageSource);

console.log("Image Alt:", imageAlt);


/* =====================================
   TASK 4: ADD AND REMOVE CSS CLASSES
===================================== */

const employeeCard = document.getElementById("employeeCard");

// Add highlight class

employeeCard.classList.add("highlight");

// Remove highlight class after button click

const styleBtn = document.getElementById("styleBtn");

styleBtn.addEventListener("click", function () {

    employeeCard.classList.remove("highlight");

});


/* =====================================
   TASK 5: TOGGLE DARK MODE
===================================== */

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});


/* =====================================
   TASK 6: CHANGE INLINE STYLES
===================================== */

const employeeName = document.getElementById("employeeName");

const changeRoleBtn = document.getElementById("changeRoleBtn");

const employeeRole = document.getElementById("employeeRole");

changeRoleBtn.addEventListener("click", function () {

    employeeName.style.color = "blue";

    employeeName.style.fontSize = "28px";

    employeeRole.style.backgroundColor = "lightyellow";

    employeeRole.style.padding = "10px";

});
