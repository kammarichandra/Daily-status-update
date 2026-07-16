import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";


function Product({ product }) {


    const dispatch = useDispatch();


    return (

        <div className="product-card">

            <h3>{product.name}</h3>

            <p>
                ₹{product.price}
            </p>


            <button
                onClick={() =>
                    dispatch(addToCart(product))
                }
            >

                Add Cart

            </button>


        </div>

    )

}


export default Product;