import { useState } from "react";

import React from 'react'

function Textarea() {

    let [message , setmessage] = useState("");
  return (
    <div>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
      <p>{message}</p>
    </div>
  )
}

export default Textarea;