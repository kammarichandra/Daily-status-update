
async function getusers() {
    
    try{

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let users = await response.json();

        let output = "";

        users.forEach(user => {
            output += `
            <div class="user">
                            <h3>${user.name}</h3>
                            <p>Email: ${user.email}</p>
                            <p>Phone: ${user.phone}</p>
                        </div>
            `;
        });

        document.getElementById("container").innerHTML = output;
    }
    catch(error){

        console.log(error)
    }
}

function clearusers(){

    document.getElementById("container").innerHTML = "";
}