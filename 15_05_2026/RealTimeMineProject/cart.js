
import { savecart } from "./storage.js";

export let cart = [];

export function addtocart(iteam,callback){
    if (!iteam || typeof iteam !== "object" || !iteam.name || !iteam.price) {
        return;
    }

    cart.push(iteam);
    savecart(cart);

    if (typeof callback === "function") {
        callback();
    }
}

export function removefromcart(index){

    cart.splice(index,1);
    savecart(cart);
}