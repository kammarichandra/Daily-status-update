import React from 'react'
import InputComponent from './InputComponent'
import SelectComponent from './SelectComponent'
import Textarea from './Textarea'


function DynamicHome() {
  return (
    <div>
        <InputComponent/>
        <SelectComponent/>
        <Textarea/>
    </div>
  )
}

export default DynamicHome;