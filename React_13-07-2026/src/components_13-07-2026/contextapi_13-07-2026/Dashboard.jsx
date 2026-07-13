import React, { useContext } from "react";
import { UserContext } from "./UserContext";

let Dashboard = () => {
    let { user } = useContext(UserContext);

    return (

        <div>
            <h1>Dashboard</h1>

            <p>
                Location: {user.city}
            </p>

        </div>
    )
}
export default Dashboard;