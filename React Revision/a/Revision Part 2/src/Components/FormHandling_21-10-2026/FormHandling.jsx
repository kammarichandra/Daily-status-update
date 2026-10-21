import React, { useState } from 'react'

function FormHandling() {

    let [formData, setformData] = useState({
        name: "",
        email: "",
        dept: "",
        sallary: ""
    })

    let [employee, setemployee] = useState(null);

    let handlechange = (event) => {
        let { name, value } = event.target

        setformData((prevData) => ({
            ...prevData,
            [name]: value

        }))
    }

    let handlesubmit = (event) => {

        event.preventDefault();

        setemployee({
            ...formData,
            sallary: Number(formData.sallary)
        })

        setformData({
            name: "",
            email: "",
            dept: "",
            sallary: ""
        })

    }
    return (
        <div>
            <h1>Form Handling </h1>
            <form action="" onSubmit={handlesubmit}>

                <label htmlFor="">Employee Name : </label>

                <input id="name" name="name" type="text" placeholder="Enter employee name" value={formData.name} onChange={handlechange} required />
                <br />
                <br />
                <label htmlFor="">Email : </label>
                <input id="email" name="email" type="email" placeholder="Enter email address" value={formData.email} onChange={handlechange} required />
                <br />
                <br />
                <label htmlFor="">Deparment :</label>
                <select id="department" name="department" value={formData.department} onChange={handlechange} required >

                    <option value="">Select department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                </select>
                <br />
                <br />
                <label htmlFor="">Monthly Sallary : </label>
                <input id="salary" name="salary" type="number" placeholder="Enter monthly salary" value={formData.sallary} onChange={handlechange} min="1" required />
                <br />
                <br />
                <button type="submit">Register Employee</button>
            </form>

            {employee && (
                <div className="employee-details">
                    <h2>Registered Employee</h2>
                    <p><strong>Name:</strong> {employee.name}</p>
                    <p><strong>Email:</strong> {employee.email}</p>
                    <p><strong>Department:</strong> {employee.department}</p>
                    <p>
                        <strong>Salary:</strong>{' '}
                        ₹{employee.salary.toLocaleString('en-IN')}
                    </p>
                </div>
            )}
        </div>
    )
}

export default FormHandling