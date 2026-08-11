import React, { useEffect, useState } from 'react'
import Header from '../../Components_10-08-2026/Product Store_11-08-2026/Components/Header'
import Searchbar from '../../Components_10-08-2026/Product Store_11-08-2026/Components/Searchbar'
import ProductList from '../../Components_10-08-2026/Product Store_11-08-2026/Components/ProductList'
import Cart from '../../Components_10-08-2026/Product Store_11-08-2026/Components/Cart'
import Loading from '../../Components_10-08-2026/Product Store_11-08-2026/Components/Loading'
import ErrorMessage from '../../Components_10-08-2026/Product Store_11-08-2026/Components/Errormsg'
import { getProducts } from '../../Components_10-08-2026/Product Store_11-08-2026/Service/ProductApi'


function ProductStorePage() {

    let [products, setProducts] = useState([]);
    let [searchTerm, setSearchTerm] = useState("");
    let [cart, setCart] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState("");

    useEffect(()=>{
        async function fetchProducts(){

            try{
                setLoading(true);
                setError("");

                let data = await getProducts();

                setProducts(data);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[])

    let handleAddToCart = (product) => {
    setCart((previousCart) => [
      ...previousCart,
      product,
    ]);
  };

  // Remove product from cart
  let handleRemoveFromCart = (indexToRemove) => {
    setCart((previousCart) =>
      previousCart.filter(
        ( index) => index !== indexToRemove
      )
    );
  };

  // Search/filter products
  let filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (

    <div className="app">

      <Header cartCount={cart.length} />

      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart}/>
      )}

      <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />

    </div>
  )

}

export default ProductStorePage