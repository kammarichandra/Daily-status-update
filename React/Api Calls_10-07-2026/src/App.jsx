import { useEffect, useState } from "react";
import { getUsers } from "./services/userService";

function App() {

    const [users,setUsers] = useState([]);


    useEffect(()=>{

        getUsers()
        .then((response)=>{

            setUsers(response.data);

        })
        .catch((error)=>{

            console.log(error);

        });


    },[]);



    return(

        <div>

            <h1>User List</h1>

            {
                users.map((user)=>(
                    <p key={user.id}>
                        {user.name}
                    </p>
                ))
            }

        </div>

    );

}


export default App;