// fetch api

let getusersn = async()=>{
    try {
        let response  = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok){
            console.log("failed to fetch users")
        }

        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
getusersn();

// get by id 

let getusersbyid = async(id)=>{
    try {
        let response  = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if(!response.ok){
            console.log("failed to fetch users")
        }

        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
getusersn(2);


// post 

let postdata = async()=>{
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users",
            {
                method : "post",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                    name : "chandra sekhar",
                    age : 23,
                    role : "ase",
                    email : "chandra@teamsync.com"
                })
            }
        )

        if(!response.ok){
            console.log("failed to  post details")
        }

        let data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error)
    }
}
postdata()

// update  

async function updateEmployee() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    id: 1,
                    name: "Chandra Sekhar",
                    email: "chandra@example.com",
                    department: "Development"
                })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to update employee");
        }

        const data = await response.json();

        console.log("Employee Updated:", data);

    } catch (error) {
        console.log(error.message);
    }
}

updateEmployee();

// patch 


async function PatchEmployee() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "Patch",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    
                    department: "It"
                })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to update employee");
        }

        const data = await response.json();

        console.log("Employee Updated:", data);

    } catch (error) {
        console.log(error.message);
    }
}

PatchEmployee();

// delete 

async function deleteEmployee(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error("Failed to delete employee");
        }

        console.log("Employee Deleted Successfully");

    } catch (error) {
        console.log(error.message);
    }
}

deleteEmployee(1);