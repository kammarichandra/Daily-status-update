import React, { useState } from 'react'

function Registration() {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        phone: '',
        dept: '',
        salary: '',
        joiningDate: ''
    });

    const handlechange = (event) => {
        const { name, value } = event.target;

        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    const handlesubmit = (event) => {
        event.preventDefault();

        console.log('employee details : ', employee);
        alert('employee registered successfully..!');

        setEmployee({
            name: '',
            email: '',
            phone: '',
            dept: '',
            salary: '',
            joiningDate: ''
        });
    };

    return (
        <div className='employee-form'>
            <h2>Employee Registration Form</h2>

            <form onSubmit={handlesubmit}>
                <label htmlFor='name'>Employee Name : </label>
                <input id='name' name='name' type='text' value={employee.name} onChange={handlechange} placeholder='enter your name' />
                <br />

                <label htmlFor='email'>Email : </label>
                <input id='email' name='email' type='email' value={employee.email} onChange={handlechange} placeholder='enter your email' />
                <br />

                <label htmlFor='phone'>Phone :</label>
                <input id='phone' name='phone' type='tel' value={employee.phone} onChange={handlechange} placeholder='enter your phone number' />
                <br />

                <label htmlFor='dept'>Department : </label>
                <select id='dept' name='dept' value={employee.dept} onChange={handlechange}>
                    <option value=''>Select Department</option>
                    <option value='IT'>IT</option>
                    <option value='HR'>HR</option>
                    <option value='Finance'>Finance</option>
                    <option value='Marketing'>Marketing</option>
                    <option value='sales'>sales</option>
                </select>
                <br />

                <label htmlFor='salary'>Salary</label>
                <input id='salary' name='salary' type='number' value={employee.salary} onChange={handlechange} placeholder='enter your salary' />
                <br />

                <label htmlFor='joiningDate'>Joining Date : </label>
                <input id='joiningDate' name='joiningDate' type='date' value={employee.joiningDate} onChange={handlechange} />
                <br />

                <button type='submit'>Register Employee</button>
            </form>
        </div>
    );
}

export default Registration