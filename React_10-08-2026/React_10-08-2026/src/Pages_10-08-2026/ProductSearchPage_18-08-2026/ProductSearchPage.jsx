import React from 'react'
import Productlist from '../../Components_10-08-2026/Product Search_18-08-2026/Components/Productlist'
import Searchbar from '../../Components_10-08-2026/Product Search_18-08-2026/Components/Searchbar'

function ProductSearchPage() {

    let handlesearch = async (query)=>{
            if(!query.trim()){
                fetchproducts();
                return;
            }
    
            try {
                setloading(true);
                seterror("");
    
                let data = await searchproducts(query);
                setproducts(data.products);
    
            } catch (error) {
                seterror("search failed...");
            }finally{
                setloading(false)
            }
        };
    
    return (
        <div>
            <h1>product store </h1>
            <Searchbar onsearch={handlesearch} />
            <Productlist />
            
        </div>
    )
}

export default ProductSearchPage