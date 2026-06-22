
//products

let productList = [

    {
        id: 1,
        name: "laptop",
        price: 30000
    },
    {
        id: 2,
        name: "mobile",
        price: 20000
    },
    {
        id: 3,
        name: "tv",
        price: 40000
    },
    {
        id: 4,
        name: "powebank",
        price: 3000
    },

];

let cart = [];

// dom manipulation

let products = document.getElementById("Products");

productList.forEach(product => {
    let div = document.createElement("div");

    div.classList.add("product");

    div.innerHTML = `
    <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button
            class="add-btn"
            data-id="${product.id}">
            Add To Cart
        </button>
    `;

    products.appendChild(div);
})

//event deligation 

products.addEventListener("click", function (e) {

    if (
        e.target.classList.contains("add-btn")
    ) {

        let id = Number(e.target.dataset.id);

        addToCart(id)
    }
})

//add to cart 

async function addToCart(id) {

    let product = productList.find(p => p.id === id);
    if (!product) return;

    cart.push(product);

    renderCart();

    try {
        const msg = await saveCart(product.name);
        console.log(msg);
    } catch (err) {
        console.error(err);
    } finally {
        console.log("save operation completed");
    }
}

// rendercart

function renderCart() {

    const itemsElement = document.getElementById("items");

    itemsElement.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        let li = document.createElement("li");

        li.classList.add("cart-item");

        li.innerHTML = `
            ${item.name}
            ₹${item.price}

            <button
            class="remove-btn"
            data-index="${index}">
            Remove
            </button>
        `;
        itemsElement.appendChild(li)
    });

    let totalElement = document.getElementById("Total");

    totalElement.textContent = `Total: ${total}`;

}

//event deligation 

let cartClickTarget = document.getElementById("cart");

cartClickTarget.addEventListener("click", function (e) {

    if (e.target.classList.contains("remove-btn")) {

        let index = Number(e.target.dataset.index);

        cart.splice(index, 1);

        renderCart();

    }
})

//timer function

let timer = 60;

let saletimer =

    setInterval(() => {

        let count = document.getElementById("count").textContent = timer;

        timer--;


        if (timer < 0) {

            clearInterval(saletimer);

            alert("flash sale ended !")
        }
    }, 1000);


//callback function

function processPayment(amount, callback) {

    console.log("processing payment...");

    setTimeout(() => {
        callback(`payment success ${amount}`)
    }, 3000);
}


// promise

function saveCart(productname) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > 0.3;

            if (success) {

                resolve(`${productname} saved`);
            } else {

                reject(`${productname} failed to save`);

            }
        }, 1000)
    })
}

// check out

let btn = document.getElementById("checkout");

btn.addEventListener("click", function () {

    let total = cart.reduce((sum, item) => sum + item.price, 0);

    processPayment(total, function (message) {
        alert(message);
    })
})


// promise all

