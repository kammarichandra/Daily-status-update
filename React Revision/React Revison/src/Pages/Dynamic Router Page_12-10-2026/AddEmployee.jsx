import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
    let navigate = useNavigate();
    let [name, setName] = useState('');

    function handleSave(e) {
        e.preventDefault();

        if (!name.trim()) {
            alert('Please enter employee name');
            return;
        }

        alert('Employee saved successfully!');
        navigate('/employees');
    }

    return (
        <div className="page">
            <h1>Add Employee</h1>

            <form className="form-box" onSubmit={handleSave}>
                <input
                    type="text"
                    placeholder="Enter employee name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <button type="submit">Save Employee</button>
            </form>
        </div>
    );
}

export default AddEmployee;