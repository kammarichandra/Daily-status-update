import React, { useState } from 'react'

function Get() {
 let [post , setpost] = useState([]);


 try {
    let getpost = async()=>{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")

        if(!response.ok){
            console.log("fetch get failed")
        }

        let data = await response.json();
    }
 } catch (error) {
    console.log("error");
 }

 
}

export default Get;