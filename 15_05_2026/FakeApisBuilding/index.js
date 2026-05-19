let output = document.getElementById("output");

// get

async function getUser() {
    
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data  = await response.json();

        output.innerHTML = "";

        data.slice(0,10).forEach(user => {
            output.innerHTML += `
                <p>
                    <b>${user.id}</b> - ${user.name}
                </p>`;
        });

    }catch(error){
        console.log("get error :",error)
    }
}

// post

async function adduser() {
    
    let newuser = {
        name : "chandra",
        email : "chandra@gmail.com"
    };

    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users",{
            method : "POST",

            headers :{
                "Content-Type" : "application/json"
            },

            body : JSON.stringify(newuser)
        });

        let data1 = await response.json();

        output.innerHTML = `
            <h3>user added</h3>
            <p>${data1.name}</p>
            <p>${data1.email}</p>`;
        
    }
    catch(error){
        console.log(" post error",error)
    }
}

// put

async function updateuser() {
    
    let updateduser = {
        name : "updated chandra",
        email : "updatedchandra@gmail.com"
    };

    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1",{
            method : "PUT",

            headers :{
                "Content-Type" : "application/json"
            },

            body : JSON.stringify(updateduser)
        });

        let data2 = await response.json();

        output.innerHTML = `
            <h3>user updated</h3>
            <p>${data2.name}</p>
            <p>${data2.email}</p>`;
        
    }
    catch(error){
        console.log(" put error",error)
    }
}

// delete

async function deleteUser() {
    
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1",{
            method : "DELETE"
        });

        if(response.ok){
            output.innerHTML = `<h3>deleted successfully</h3>`;
        }
        
    }
    catch(error){
        console.log(" deleted error",error)
    }
}