import { useDispatch } from "react-redux";

import { addToCart } from "./cartSlice";


function Product(){


let dispatch = useDispatch();


let product={

id:1,

name:"Laptop",

price:50000

};



return(

<div>

<h2>{product.name}</h2>

<p> Price: {product.price}</p>

<button onClick={()=> dispatch(addToCart(product))}> Add Cart </button>

</div>

);

}

export default Product;