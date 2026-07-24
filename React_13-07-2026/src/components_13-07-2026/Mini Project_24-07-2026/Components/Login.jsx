import React, { useState } from "react";


function Login({ onLogin }) {

    let [user, setUser] = useState({
        username: "",
        password: ""
    });

    let [error, setError] = useState("");

    let handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
              
    };
       
    let handleSubmit = (e) => {
         
        e.preventDefault();
           
        if ( user.username === "chandra" &&user.password === "chandra123") {
               
            setError("");
                
            onLogin();
        }                   
        else {
                        
            setError("Invalid Username or Password");
                      
        }
                              
    };
 
    return (                          

        <div className="login-container">

            <h2>  HMS Login </h2>
                                                       
            {
                error &&
                <p style={{color:"red"}}>
                    {error}
                </p>
            }
                                                                                         
            <form onSubmit={handleSubmit}>

                <label htmlFor="">Username : </label>
                <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />

                <br/><br/>
                                                                             
                <label htmlFor="">Password :</label>
                <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />

                <br/><br/>

                <button type="submit"> Login </button>

            </form>

        </div>

    );

}

export default Login;