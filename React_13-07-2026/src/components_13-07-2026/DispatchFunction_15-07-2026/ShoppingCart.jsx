import { useReducer } from "react";

import { 
    CartReducer, 
    initialstate, 
    addtocart, 
    removefromcart, 
    clear 
} from "./CartReducer";


function ShoppingCart() {


    let [state, dispatch] = useReducer(
        CartReducer,
        initialstate
    );


    let products = [
        {
            id: 1,
            name: "Mobile",
            price: 15000
        },
        {
            id: 2,
            name: "Laptop",
            price: 50000
        },
        {
            id: 3,
            name: "Headphones",
            price: 2000
        }
    ];

    function addProduct(product) {

        dispatch({

            type: addtocart,

            payload: product

        });

    }

    function removeProduct(id) {

        dispatch({

            type: removefromcart,

            payload: id

        });

    }

    function clearCart() {

        dispatch({

            type: clear

        });

    }

    return (

        <div>


            <h2>Products</h2>
            {
                products.map(product => (

                    <div key={product.id}>

                        <h3>{product.name}</h3>

                        <p> {product.price}</p>

                        <button  onClick={() => addProduct(product)}> Add To Cart </button>

                    </div>

                ))
            }

            <hr />

            <h2>  Cart Items </h2>

            {
                state.cart.map(item => (

                    <div key={item.id}>

                        <p> {item.name} - {item.price}</p>

                        <button onClick={() => removeProduct(item.id)}> Remove </button><br />

                    </div>

                ))
            }


            <button onClick={clearCart}> Clear Cart </button>

        </div>

    );

}


export default ShoppingCart;