
let card = document.getElementById("card");

let buybtn = document.getElementById("buybtn");

card.addEventListener("click",function(){

    alert("product opened")
    console.log("product opened..")
})

buybtn.addEventListener("click",function(){
    alert("product added to cart")
    console.log("product added to cart")
})

// capturing 

let company = document.getElementById("company");

let loginbtn = document.getElementById("loginbtn");

company.addEventListener("click",function(){
    alert("Please login to acsses")
    console.log("Please login to acsses")
});

loginbtn.addEventListener("click",function(){
    alert("login was sucssesfull");
    console.log("login was sucsessfull");
})