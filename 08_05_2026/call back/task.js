
let cart = [];

// add to cart 

function addtocart(item){

    cart.push(item)
    displaycart();
}

// display cart 

function displaycart(){

    let cartitems = document.getElementById("cartitems");
    cartitems.innerHTML = "";

    cart.forEach(function(item){
        let li = document.createElement("li");

        li.innerText = item;
        cartitems.appendChild(li)
    })
}

// callback 

function prepareOrder(callback){

document.getElementById("message").innerText = "Preparing order";

setTimeout(function(){
    callback();
},3000)
}

// promise

function deliverOrder(){
    return new Promise(function(resolve , reject){
        let success = true;

        setTimeout(function(){
            if(success){
                resolve("Order delivered successfully")
            }else{
                reject("Delivery failed")
            };
        },5000)
    })
}

// add to cart buttons

document.getElementById("addPizza").addEventListener("click", function() {
    addtocart("Pizza");
});

document.getElementById("addBurger").addEventListener("click", function() {
    addtocart("Burger");
});

document.getElementById("addFriedRice").addEventListener("click", function() {
    addtocart("Fried Rice");
});

// order button

let orderbtn = document.getElementById ("orderbtn");

orderbtn.addEventListener("click",function(){
    if(cart.length === 0 ){
        alert("Cart is empty..")
        return;
    }

    // callback 

    prepareOrder(function(){
        document.getElementById("message").innerText = "Food prepared";


        // promise

        deliverOrder().then(function(result){
            document.getElementById("message").innerText = result;

            cart  = [];

            displaycart();
        }).catch(function(error){
            document.getElementById("message").innerText = error;
        });
    });
});