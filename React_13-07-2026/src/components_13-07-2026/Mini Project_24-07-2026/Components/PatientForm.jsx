import React, { useState } from "react";


function PatientForm() {


    const [patient, setPatient] = useState({

        name: "",
        age: "",
        disease: ""

    });


    const [error, setError] = useState("");



    const handleChange = (e) => {


        setPatient({

            ...patient,

            [e.target.name]: e.target.value

        });


    };



    const handleSubmit = (e) => {


        e.preventDefault();



        if (!patient.name ||!patient.age || !patient.disease ) {

            setError("All fields are required");

            return;

        }

        setError("");

        alert("Patient Registered Successfully");

        setPatient({

            name: "",
            age: "",
            disease: ""

        });


    };



    return (

        <div className="form-container">


            <h2>
                Add Patient
            </h2>



            {
                error &&

                <p style={{ color: "red" }}>
                    {error}
                </p>

            }



            <form onSubmit={handleSubmit}>


                <input type="text"  name="name"  placeholder="Patient Name"  value={patient.name} onChange={handleChange} />

                <br />

                <input type="number" name="age" placeholder="Age" value={patient.age} onChange={handleChange}/>

                <br />

                <input type="text" name="disease" placeholder="Disease" value={patient.disease} onChange={handleChange} />

                <br />

                <button> Save Patient </button>

            </form>

        </div>

    )

}


export default PatientForm;