import { useContext } from "react";
import { UserContext } from "./UserContext";


function UserProfile() {

    let { user } = useContext(UserContext);


    return (

        <div className="checkout">

            <h3> User : {user.name} </h3>

            <p> {user.email} </p>

        </div>

    )

}

export default UserProfile;