import React , {useState}from 'react'
import Message from './Message'
function Home() {

    let [show , setshow] = useState(true);
  return (
    <div>
        <h1>Show And Hide component </h1>
        <button onClick={()=>setshow(!show)}>{show ? "hide" : "show"}Component</button>
        <hr />
        {show && <Message/>}
    </div>
  )
}

export default Home;
