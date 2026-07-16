


import { useReducer } from "react";

import { loginReducer,initialState } from "./LoginReducer";
import Dashboard from "./Dashboard";



function Login() {


    const [state, dispatch] = useReducer( loginReducer,initialState );


    function handleChange(e) {


        dispatch({

            type:"UPDATE_FIELD",

            payload:{

                field:e.target.name,

                value:e.target.value

            }

        });

    }



    function handleLogin(e) {


        e.preventDefault();



        dispatch({

            type:"LOGIN_START"

        });



        setTimeout(()=>{


            if(
                state.email === "chandra@gmail.com" &&
                state.password === "12345"
            ){


                dispatch({

                    type:"LOGIN_SUCCESS"

                });


            }

            else{

                dispatch({

                    type:"LOGIN_ERROR",

                    payload:"Invalid Email or Password"

                });
            }


        },2000);


    }

    if(state.isLoggedIn){

        return <Dashboard />;

    }

    return (

        <div>
            <h1>
                Login Form
            </h1>



            <form onSubmit={handleLogin}>


                <input type="email" name="email" placeholder="Enter Email" value={state.email} onChange={handleChange}/>

                <br/><br/>

                <input type="password" name="password" placeholder="Enter Password" value={state.password} onChange={handleChange}/>

                <br/><br/>

                <button disabled={state.loading}>

                    {
                        state.loading
                        ?
                        "Logging in..."
                        :
                        "Login"
                    }

                </button>

            </form>
            {
                state.error &&

                <p style={{color:"red"}}>{state.error}</p>

            }
        </div>

    );

}


export default Login;