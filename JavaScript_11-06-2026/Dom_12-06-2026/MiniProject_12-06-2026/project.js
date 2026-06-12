let title = document.getElementById("title");
let empname = document.querySelector(".name");
let role = document.querySelector(".role");
let sal = document.querySelector(".sal")
let button = document.getElementById("showbtn");

console.log(title.textContent);
console.log(empname.textContent);
console.log(role.textContent);
console.log(sal.textContent);

//profile inspector

let profile = document.getElementById("profile");
let button1 = document.getElementById("button");
let name =document.getElementById("name")
let email = document.getElementById("email")


button1.addEventListener("click",function(){
    console.log(name.textContent);
    console.log(email.textContent);

    //  console.log(profile.children);
})
