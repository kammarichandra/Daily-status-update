import React, { useEffect, useState } from 'react'

function UseProducts() {

    let [products, setproducts] = useState([]);
    let [loading, setloading] = useState(true);
    let [error, seterror] = useState("");

    useEffect(() => {

        async function frtchproducts() {

            try {
                setloading(true);

                let response = await fetch("https://fakestoreapi.com/products");

                if (!response.ok) {
                    throw new Error("failed to fetch products ");
                }

                let data = await response.json();
                setproducts(data);
            } catch (err) {
                seterror(err.message);
            } finally {
                setloading(false)
            }
        }
        frtchproducts();
    }, []);



    return {
        products,
        loading,
        error,
    }
}

export default UseProducts