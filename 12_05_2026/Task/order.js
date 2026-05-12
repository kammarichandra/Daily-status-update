 
export function placeorder(cart , callback){

    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            if(cart.length>0){
                resolve("order placed succsessfully")
                callback();
            }else{
                reject("cart is empty");
            }
        },2000)
    })
}