import React, { useState } from 'react'

function FormValidation() {

    let [formdata, setformdata] = useState({
        username: "",
        email: "",
        password: "",
    });

    let [error, seterror] = useState({});

    let handlechange = (e) => {
        let { name, value } = e.target;

        setformdata({
            ...formdata,
            [name]: value,
        });
    };

    let validate = () => {

        let newErrors = {};

        if (formData.username.trim() === "") {
            newErrors.username = "Username is required";
        }

        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
        }

        if (!formData.email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }

        if (formData.password.length < 6) {
            newErrors.password =
                "Password must contain at least 6 characters";
        }

        return newErrors;
    };

    let handlesubmit = (e) => {

        e.preventDefault();

        let validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        seterrors({});
        console.log("Form submitted:", formData);
    }

    return (
        <form onSubmit={handlesubmit}>
            <h2>Registration</h2>

            <input name="username" placeholder="Username" value={formdata.username} onChange={handlechange} /><br /><br />

            {error.username && (
                <p style={{ color: "red" }}>{error.username}</p>
            )}

            <input name="email" placeholder="Email" value={formdata.email} onChange={handlechange} /><br /><br />

            {error.email && (
                <p style={{ color: "red" }}>{error.email}</p>
            )}

            <input type="password" name="password" placeholder="Password" value={formdata.password} onChange={handlechange} /><br /><br />

            {error.password && (
                <p style={{ color: "red" }}>{error.password}</p>
            )}

            <button type="submit">Register</button>

        </form>
    )

}

export default FormValidation