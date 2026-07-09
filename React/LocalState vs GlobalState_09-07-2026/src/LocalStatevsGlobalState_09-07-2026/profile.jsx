import React, { useContext } from "react";
import { AppContext } from "../Contrext_09-07-2026/Appcontext";

function Profile() {

    let { user, changeUser, theme, changeTheme } = useContext(AppContext);

    return (

        <div>
            <h1>Profile</h1>

            <h1>
                username : {user}
            </h1>


            <button onClick={changeUser}>change user</button>


            <h3>
                Current Theme: {theme}
            </h3>


            <button onClick={changeTheme}>
                Change Theme
            </button>

        </div>

    )
}

export default Profile;