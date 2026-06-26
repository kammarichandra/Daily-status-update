

//get api 

fetch("https://api.escuelajs.co/api/v1/products")

.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error =>{
    console.log(error);
})

//using async and await

async function get() {
    
    try{

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();
    }
    catch(error){
        console.log(error)
    }
}
get();

//post request 

let post = {

    title : "user details",
    body : "fetch api",
    userid : 1
};

fetch("https://jsonplaceholder.typicode.com/posts",{

    method : "Post",

    headers : {

        "content-type" : "apllication/json"
    },

    body : JSON.stringify(post)
})
.then(response => response.json())
.then(data => {
    console.log("created :" ,data)
})
.catch(error =>{
    console.log(error)
})

//put 

let updateuser = {

    id : 1,
    title : "updated user",
    body : "updated content",
    userid : 2
};

fetch("https://jsonplaceholder.typicode.com/posts/2",{

    method : "put",
    headers : {
        "content-type":"application/json"
    },
    body : JSON.stringify(updateuser)
})

.then(response => response.json())

.then(data =>{

    console.log(data)

})

.catch(error=>{

    console.log(error);
})

// delete user 

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method : "Delete",

})

.then(response => {

    if (!response.ok) {
        
        console.log("post deleted successfully")
    }else{

        console.log("Delete failed..")
    }
})

.catch(error => {

    console.log(error);
})