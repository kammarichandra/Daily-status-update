let products = [
    {id : 1 , name : "laptop" , price : 20000},
    {id : 2 , name : "mobile" , price : 25000},
    {id : 3 , name : "earphones" , price : 3000},
    {id : 4 , name : "tv" , price : 40000},
]

let container = document.getElementById("container");
let cart = document.getElementById("cartlist");
let count = document.getElementById("count");
let total = document.getElementById("total");

let itemcount = 0;
let totalprice = 0;

//creating card 

products.forEach(product => {
    let card = document.createElement("div");

    card.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button>Add to Cart</button>
    `;

    container.appendChild(card);

    let btn = card.querySelector("button");

    btn.addEventListener("click" , ()=>{
        let li = document.createElement("li");

        li.innerHTML = `
        ${product.name} - ${product.price}

        <button class = "remove">Remove</button>
        `;

        cart.appendChild(li);

        itemcount++;
        totalprice += product.price;

        count.textContent = itemcount;
        total.textContent = totalprice;

        // remove item 

        li.querySelector(".remove").addEventListener("click", function(){

            // dom transversing 

            let parent  = this.parentElement;

            cart.removeChild(parent);

            itemcount--;
            totalprice -= product.price;

            count.textContent = itemcount;
            total.textContent = totalprice;
        })
    })
})