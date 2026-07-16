import { useSelector } from "react-redux";
import CartItem from "./Cartitem";


function Cart() {


    let items = useSelector( state => state.cart.items );

    return (

        <div className="cart">

            <h2> Cart </h2>

            {
                items.map((item) => (

                    <CartItem
                        key={item.id}
                        item={item}
                    />

                ))

            }


        </div>

    )

}


export default Cart;