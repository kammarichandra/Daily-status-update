
export function savecart(cart){

    localStorage.setItem("cart",JSON.stringify(cart))
}

export function loadcart(){
    return JSON.parse(localStorage.getItem("cart") || "[]")
}