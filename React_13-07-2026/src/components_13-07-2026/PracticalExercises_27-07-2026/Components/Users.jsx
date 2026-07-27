import React, { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import UserCard from "./UserCard";
// import UserCardMemo from "./UserCardMemo";


function Users() {

    let [users, setUsers] = useState([]);
    let [count, setCount] = useState(0);


    useEffect(() => {

        getUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);


    return (
        <div>

            <h2>  Users List with memo </h2>

            <button onClick={() => setCount(count + 1)}> Count {count} </button>

            {
                users.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                    />
                ))
            }
        </div>
    );
}


export default Users;