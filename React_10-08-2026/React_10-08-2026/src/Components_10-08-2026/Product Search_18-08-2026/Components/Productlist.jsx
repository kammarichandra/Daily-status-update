import React, { useEffect, useState } from 'react'
import { getProducts , searchproducts } from '../Services/ProductApi'
import Loading from './Loading'
import Errormsg from './Errormsg'
import ProductCard from './ProductCard';
// import Searchbar from './Searchbar';

function Productlist() {
    let [products , setproducts] = useState([]);
    let [loading , setloading] = useState(false);
    let [error , seterror] = useState("");

    let fetchproducts = async ()=>{

        try {
            setloading(true);
            seterror("");

            let data = await getProducts();

            setproducts(data.products);

        } catch (error) {
            seterror("failed to fetch products...")
        }finally{
            setloading(false)
        }
    }

    // let handlesearch = async (query)=>{
    //     if(!query.trim()){
    //         fetchproducts();
    //         return;
    //     }

    //     try {
    //         setloading(true);
    //         seterror("");

    //         let data = await searchproducts(query);
    //         setproducts(data.products);

    //     } catch (error) {
    //         seterror("search failed...");
    //     }finally{
    //         setloading(false)
    //     }
    // };

    useEffect(()=>{
        fetchproducts();
    },[]);

    if(loading){
        return <Loading/>
    }
    if(error){
        return<Errormsg message={error}/>
    }
  return (
    <div className='product-list'>

      {/* <Searchbar onsearch={handlesearch} /> */}

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Productlist