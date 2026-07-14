import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    addUser,
    updateUser,
    removeUser,
} from "./userSlice";

function User() {
    const [name, setName] = useState("");

    const user = useSelector((state) => state.user.user);

    const dispatch = useDispatch();

    return (
        <div>
            <h2>User Profile</h2>

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br />
            <br />

            <button onClick={() => dispatch(addUser(name))}>
                Add User
            </button>

            <button onClick={() => dispatch(updateUser(name))}>
                Update Name
            </button>

            <button onClick={() => dispatch(removeUser())}>
                Remove User
            </button>

            <hr />

            {user && (
                <div>
                    <h3>User Details</h3>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                </div>
            )}
        </div>
    );
}

export default User;