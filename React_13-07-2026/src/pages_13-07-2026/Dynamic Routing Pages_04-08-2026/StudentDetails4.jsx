import React from 'react'
import StudentsData from '../../components_13-07-2026/Dynamic Routing_04-08-2026/StudentsData'
import { useParams } from 'react-router-dom'


function StudentDetails4() {
    let {id} = useParams();

    let student = students.find((item)=>item.id === Number(id));

    if(!student){
        return <h2>Student not found</h2>
    }
  return (
    <div>
      <h1>Student Details</h1>

      <h3>ID : {student.id}</h3>
      <h3>Name : {student.name}</h3>
      <h3>Course : {student.course}</h3>
      <h3>City : {student.city}</h3>
    </div>
  )
}

export default StudentDetails4