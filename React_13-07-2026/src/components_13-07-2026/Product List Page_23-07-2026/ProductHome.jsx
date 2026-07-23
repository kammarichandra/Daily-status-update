import React, { useEffect, useState } from "react";

import ProductList from "./ProductList";
import withLoading from "./WithLoading";


let LoadingProductList = withLoading(ProductList);


function App() {

  let [products, setProducts] = useState([]);

  let [isLoading, setIsLoading] = useState(true);



  useEffect(() => {


    // Simulating API call
    setTimeout(() => {


      setProducts([
        {
          id: 1,
          title: "iPhone 15",
          price: 70000
        },
        {
          id: 2,
          title: "Laptop",
          price: 55000
        },
        {
          id: 3,
          title: "Wireless Headphones",
          price: 3000
        }
      ]);


      setIsLoading(false);


    }, 3000);


  }, []);



  return (

    <div>

      <h1> My Store</h1>

      <LoadingProductList isLoading={isLoading} products={products} />

    </div>

  );
}


export default App;