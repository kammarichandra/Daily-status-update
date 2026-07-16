import { useSelector, useDispatch } from "react-redux";
import { removeCart, clearCart } from "./cartSlice";


function Cart() {


    const items =
        useSelector(
            state => state.cart.items
        );


    const dispatch = useDispatch();



    return (

        <div>

            <h2> Cart </h2>

            {
                items.map(item => (

                    <div key={item.id}>

                        <p>
                            {item.name}
                        </p>

                        <button onClick={() => dispatch(removeCart(item.id)) } > Remove</button>

                    </div> 
                ))
            }

            <button onClick={() => dispatch(clearCart()) } > Clear Cart </button>
        </div>

    );


}


export default Cart;