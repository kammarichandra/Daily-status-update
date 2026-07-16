import { useSelector } from "react-redux";
import Product from "./Product";


function ProductList() {


    let products = useSelector( state => state.products.products );

    return (

        <div>

            <h2> Products </h2>

            {
                products.map(product => (

                    <Product
                        key={product.id}
                        product={product}
                    />

                ))

            }

        </div>

    )


}


export default ProductList;