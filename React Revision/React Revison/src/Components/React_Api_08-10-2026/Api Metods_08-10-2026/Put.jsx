import React, { useState } from 'react'

function Put() {
    let [userId , setuserId] = useState("");

    let [user , setuser] = useState({
        name : "",
        email: "",
        phone : ""
    });

    let [message , setmessage] = useState("");
    
    let handlechange = (e)=>{
        let {name , value} = e.target;

        setuser({...user , [name] : value})
    }

    let handleupdate = async (e)=>{
        e.preventDefault();

        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,
                {
                    method : "put",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify(user)
                }
            )

            let data = await response.json();

            console.log("updated user data : " ,data)
            setmessage("user updated successfully..!")
        } catch (error) {
            console.log("error :" , error);
            setmessage("failed to updated user")
        }
    }
  return (
    <div>
        <h2>put api</h2>

        <form action="" onSubmit={handleupdate}>
            <label htmlFor="">User Id : </label>
            <input type="text" value={userId} onChange={(e)=>setuserId(e.target.value)} placeholder='enter user id' />
            <br />

            <label htmlFor="">Name : </label>
            <input type="text" value={user.name} onChange={handlechange} placeholder='enter user name' />
            <br />

            <label htmlFor="">Email : </label>
            <input type="email" value={user.email} onChange={handlechange} placeholder='enter email ' />
            <br />

            <label htmlFor=""> Phone : </label>
            <input type="tel" value={user.phone} onChange={handlechange} placeholder='enter user phone' />
            <br />

            <button type="submit"> Update User </button>
        </form>
        <p>{message}</p>
    </div>
  )
}

export default Put