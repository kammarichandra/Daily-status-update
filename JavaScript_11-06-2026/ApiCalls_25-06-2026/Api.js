//fetch api

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {

    console.log(data);
})
.catch(error => {

    console.log(error);
})

//posts 

fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        title: "javascript",
        body: "fetch api",
        userId: 1
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});

//put 

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        title: "updated name",
        userId: 1
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});

//delete 

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method : "DELETE"
})
.then(response => {
    console.log("record deleted")
});

//fetch using async and await 

async function getusers() {
    
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await res.json();

        console.log(data);
    }
    catch (error){

        console.log(error);
    }
}

getusers();

async function loadusers() {
    
    try{

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let users = await response.json();

        let result = "";

        users.forEach(user => {
            result += `
            <div>
                            <h3>${user.name}</h3>
                            <p>Email: ${user.email}</p>
                            <p>Phone: ${user.phone}</p>
                        </div>
            `;
        });

        document.getElementById("output").innerHTML = result;
    }
    catch (error){

        console.log(error);
    }
}

// error handling in apis

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {

    if (!response.ok) {
        
        throw new Error("failed to fetch api..");
    }
    return response.json();
})
.then(data => {
    console.log("success :",data)
})
.catch(error=>{
    console.log("error :",error)
})

//error displaying

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>{

    if(!response.ok){
        throw new Error("API Not Found");
    }

    return response.json();
})
.then(data => {

    console.log(data);
})
.catch(error => {
    console.log("error :", error);
});