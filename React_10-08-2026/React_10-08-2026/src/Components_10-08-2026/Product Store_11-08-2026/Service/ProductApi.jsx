let Api = "https://fakestoreapi.com/products";

export async function getProducts(){

    let response = await fetch(Api);

    if(!response.ok){
        throw new Error("failed to fetch products");
    }

    return response.json();
    
}
