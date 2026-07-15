import { useReducer } from "react";
import { FormReducer, currentState, UPDATE } from "./FormReducer";

function RegisterForm() {

    const [state, dispatch] = useReducer(FormReducer, currentState);

    function handleChange(e) {

        dispatch({
            type: UPDATE,
            field: e.target.name,
            value: e.target.value
        });

    }

    return (
        <div>

            <label htmlFor="">Name :</label>
            <input type="text" name="name" placeholder="Enter Name" value={state.name} onChange={handleChange} /><br /><br />

            <label htmlFor="">Email :</label>
            <input type="email" name="email" placeholder="Enter Email" value={state.email} onChange={handleChange}/><br /><br />

            <label htmlFor="">Password :</label>
            <input type="password" name="password" placeholder="Enter Password" value={state.password} onChange={handleChange} /><br /><br />

            <button>Submit</button>

            <h3>Name: {state.name}</h3>
            <h3>Email: {state.email}</h3>

        </div>
    );
}

export default RegisterForm;