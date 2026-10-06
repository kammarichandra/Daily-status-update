import React from 'react'
import Card from '../../Components/Props_06-10-2026/Card'
import Counter from '../../Components/Usestate_06-10-2026/Counter'
import Click from '../../Components/Props_06-10-2026/Click'
import Parent from '../../Components/Child_Parent_06-10-2026/Parent'
import Conditional from '../../Components/Conditional Rendering_06-10-2026/Conditional'

function PropsPage() {
  return (
    <div>
        <h1>Passing data from Parent to child </h1>
        
        <Card 
        name={"chandra sekhar"}
        age={24}
        skills={["html" , "css" , "javascript" , "react"]}
        />
        <br />

        <h1>Usestate</h1>
        <Counter/><br />

        <h1>passing function as props</h1>
        <Click/><br />

        <h2>Child to parent</h2>
        <Parent/><br />

        <h1>Conditonal Rendering </h1>
        <Conditional/>

    </div>
  )
}

export default PropsPage