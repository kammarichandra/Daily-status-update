// Fetch API
// The Fetch API is used to communicate with a server/API.
// syntax : 

// fetch("api url")
//     .then((response)=>response.json())
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    });

// GET Request
// GET is used to get/read data from a server.

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response)=>response.json())
    .then((user)=>{
        console.log(user);
    })
    .catch((error)=>{
        console.log(error);
    });
// post 

fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "post",
    headers : {
        "content-type" : "application/json"
    },
    body : JSON.stringify({
        title : "post",
        body : "post api making",
        id : 1
    })
})
.then((response)=>response.json())
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
});

// PUT Request
// PUT is used to replace/update the complete data.

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method : "put",
    headers : {
        "content-type" : "application/json"
    },
    body : JSON.stringify({
        id : 1,
        title : "updated name",
        userid : 1
    })
})
.then((response)=>response.json())
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

// patch 

fetch("https://jsonplaceholder.typicode.com/posts/1", {

  method: "PATCH",

  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
    title: "New Title"
  })
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

  async function deleteuser() {
    
    let response = await fetch ("https://jsonplaceholder.typicode.com/users/1",
        {
            method : "delete",

        }

    )
    if(response.ok){
        console.log("user deleted successfully...")
    }
  }
  deleteuser();

  async function getuset() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = response.json();
    console.log(data);
  }
  getuset();

// Request and Response
// When we communicate with an API:
// Client
//    ↓
// Request
//    ↓
// Server
//    ↓
// Response
//    ↓
// Client

// Loading and Error Handling
// When calling an API, it is good practice to show:
// Loading...
//    ↓
// API Call
//    ↓
// Success → Display Data
// OR
// Error → Display Error

async function getusers() {

    try {

        console.log( "loading....");

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok){
            console.log("failed to fetch user data")
        }

        let data = response.json();

        console.log("user data :",data);

    } catch (error) {

        console.log("error : ",error.message);

    }finally{
        console.log("user details recived successfulyy");
    }
}

getusers();

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  display() {
    console.log(this.name);
    console.log(this.department);
  }
}

const employee1 = new Employee("Ravi", "Development");

employee1.display();