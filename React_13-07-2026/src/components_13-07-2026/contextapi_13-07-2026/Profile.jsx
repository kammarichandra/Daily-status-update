import React, { useContext } from "react";
import { UserContext } from "./UserContext";

let Profile = () => {

    let { user } = useContext(UserContext);

    return (

        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>

            <p>Role: {user.role}</p>
        </div>
    )
}
export default Profile;