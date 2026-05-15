
let API_URL = "https://dummyjson.com/recipes?limit=10&skip=10&select=name,image"


export async function fetchfoods() {
    
    try{
        let response = await fetch(API_URL);

        if(!response.ok){
            throw new Error("failed to fetch foods")
        }

        let data = await response.json();
        let items = Array.isArray(data)
            ? data
            : data.recipes || data.products || data.tags || [];

        return items.slice(0,10).map(item => {
            let name = typeof item === "object"
                ? (item.title || item.name || item.tag || "Food item").toString()
                : item.toString();

            return {
                id: typeof item === "object" ? item.id ?? name : name,
                name: name.slice(0,10),
                price: Math.floor(Math.random() * 500) + 100
            };
        })
    }
    catch(error){
        console.log(error);

        return[];
    }
}

// fake api order api 

export function placeorder(cart){

    return new Promise ((resolve , reject)=>{
        setTimeout(()=>{
            if(cart.length>0){
                resolve("order placed successfully")
            }
            else{
                reject("cart is empty")
            }
        },2000)
    })
}