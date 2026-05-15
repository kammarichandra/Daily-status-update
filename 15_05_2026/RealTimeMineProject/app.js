import { fetchfoods ,placeorder } from "./api.js";

import { cart , addtocart ,removefromcart } from "./cart.js";

import { loadcart } from "./storage.js";


let foodContainer  = document.getElementById("food-container");

let cartContainer = document.getElementById("cart-container");

let orderbtn = document.getElementById("orderbtn");


cart.push(...loadcart().filter(item => item && item.name && item.price));


//loading food from fake api

async function loadfood() {
    
    try{
        foodContainer.innerHTML = "<h3>Loading food</h3>";

        let foods = await fetchfoods();

        foodContainer.innerHTML = "";

        foods.forEach(food => {
            
            let div = document.createElement("div");

            div.className = "food card";

            div.innerHTML = `    <h3>${food.name}</h3>
    <p>price : ${food.price}</p>
    <button>Add to cart</button>`;

    let button = div.querySelector("button");

    button.addEventListener("click",()=>{
        addtocart(food,()=>{
            displaycart();
            alert(`${food.name} Added`)
        });
    });

    foodContainer.appendChild(div)
        });
    }
    catch(error){
        foodContainer.innerHTML = "error Loading Foods"
    }
}

// Display cart

function displaycart(){
    cartContainer.innerHTML = "";

    cart.forEach((iteam, index) => {
        if (!iteam || !iteam.name || !iteam.price) {
            return;
        }

        let div = document.createElement("div");

        div.innerHTML =`${iteam.name}-${iteam.price}
        <button>Remove</button>`;

        let btn  = div.querySelector("button");

        btn.addEventListener("click",()=>{
            removefromcart(index);
            displaycart();
        });
        cartContainer.appendChild(div)
    })
}

// place order

orderbtn.addEventListener("click",async()=>{
    try{
        orderbtn.innerText = "ordering..."

        let message = await placeorder(cart);

        alert(message);
        localStorage.removeItem("cart");
        location.reload();
    }
    catch(error){
        alert(error)
    }
    finally{
        orderbtn.innerText = "place order"
    }
});

loadfood();
displaycart();