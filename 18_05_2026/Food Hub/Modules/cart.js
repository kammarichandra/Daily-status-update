export function addtocart(foodname) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(foodname);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(foodname + " Added to cart");
}