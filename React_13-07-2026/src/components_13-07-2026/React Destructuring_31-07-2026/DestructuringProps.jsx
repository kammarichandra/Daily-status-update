import React from 'react'
import Student from './Student'

function DestructuringProps() {
  return (
    <div>
        <Student 
        name = "chandra"
        age = {21}
        course = "react"
        />
    </div>
  )
}

export default DestructuringProps;