let cart =[];

export function addtocart(food){
    cart.push(food);
    displaycart();
}

export function remove(index){
    cart.splice(index,1);
    displaycart();
}

export function getcart(){
    return cart;
}

function displaycart(){
    let cartitems = document.getElementById("cart-items");

    cartitems.innerHTML = "";

    cart.forEach((item,index)=>{
        let li = document.createElement("li");

        li.innerHTML =`${item.name}-${item.price}
        <button onclick="removeitem(${index})">remove</button>`;
        cartitems.appendChild(li);
    })
}
window.removeitem = remove; 