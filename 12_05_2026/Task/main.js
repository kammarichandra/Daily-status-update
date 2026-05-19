import { foods } from "./product.js";
import { addtocart , getcart } from "./cart.js";
import { placeorder } from "./order.js";

let foodcontainer = document.getElementById("container");

foods.forEach((food)=>{
    let div = document.createElement("div");
    div.classList.add("foodcart");

    div.innerHTML = `<h3>${food.name}</h3>
    <p>price : ${food.price}</p>
    <button>Add to cart</button>`;

    let button = div.querySelector("button");
    button.addEventListener("click",()=>{
        addtocart(food);
        alert(`${food.name} Added to cart`)
    });

    foodcontainer.appendChild(div);
});

let orderbtn = document.getElementById("orderbtn");
orderbtn.addEventListener("click", ()=>{
    placeorder(getcart(), ()=>{
        console.log("callback executed after order");
    })
    .then((message)=>{
        alert(message);
    })
    .catch((error)=>{
        alert(error);
    });
});

 