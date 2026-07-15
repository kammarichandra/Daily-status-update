import { useReducer } from "react";
import { UserReducer, initialstate, login, logout, updateprofile } from "./UserReducer";


function UserProfile() {

    let [state, dispatch] = useReducer(UserReducer, initialstate);


    let loginUser = () => {

        dispatch({
            type: login,
            payload: {
                id: 1,
                name: "Chandra",
                email: "chandra@gmail.com",
                mobileNum: "9908133058"
            }
        });

    };


    let updateUser = () => {

        dispatch({
            type: updateprofile,
            payload: {
                name: "Chandra Updated"
            }
        });

    };


    let logoutUser = () => {

        dispatch({
            type: logout
        });

    };


    return (

        <div>

            <h2>User Profile</h2>


            {
                state.isloggedin ? (

                    <div>

                        <h3>
                            Name: {state.user.name}
                        </h3>


                        <p>
                            Email: {state.user.email}
                        </p>


                        <button onClick={updateUser}>
                            Update Name
                        </button>


                        <button onClick={logoutUser}>
                            Logout
                        </button>

                    </div>

                ) : (

                    <button onClick={loginUser}>
                        Login
                    </button>

                )
            }


        </div>
    );
}

export default UserProfile;