import React, { useEffect, useRef, useState } from 'react'

function EmpForm({ onAddEmployee, onClose }) {

    let nameInputRef = useRef(null);

    let [formData, setFormData] = useState({

        name: "",
        email: "",
        phone: "",
        department: "IT",

    });

    useEffect(() => {

        nameInputRef.current?.focus();

    }, [])


    let handleChange = (event) => {

        let { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

    };

    let handleSubmit = (event) => {

        event.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim()
        ) {
            alert("Please fill all fields");
            return;
        }

        onAddEmployee({
            ...formData,
            id: Date.now(),
            company: "My Company",
        });

        setFormData({
            name: "",
            email: "",
            phone: "",
            department: "IT",
        });

        onClose();
    };

    return (
        <div className="modal-overlay">

      <div className="employee-form">

        <div className="form-header">

          <h2> Add Employee</h2>

          <button onClick={onClose}>✕</button>

        </div>

        <form onSubmit={handleSubmit}>
          <label>Name</label>

          <input
            ref={nameInputRef}
            type="text"
            name="name"
            placeholder="Enter employee name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email</label>

          <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />

          <label>Phone</label>

          <input type="text" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} />

          <label>Department</label>

          <select name="department" value={formData.department} onChange={handleChange} >

            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>

          </select>

          <div className="form-buttons">

            <button  type="button" className="cancel-button" onClick={onClose} > Cancel </button>

            <button type="submit" className="save-button" > Save Employee </button>

          </div>

        </form>

      </div>
    </div>
    )
}

export default EmpForm