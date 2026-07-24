import React, { useEffect, useState } from "react";

import API from "../Services/Api";
import Loader from "./Loader";


function PatientList() {

    const [patients, setPatients] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        API.get("/users")

            .then(response => {

                setPatients(response.data);

                setLoading(false);

            })

            .catch(error => {


                setError("Failed to fetch patients");

                setLoading(false);
            });


    }, []);


    if (loading) {

        return <Loader />
    }

    if (error) {

        return (

            <h3 style={{ color: "red" }}>

                {error}

            </h3>

        )

    }

    return (

        <div className="table-container">

            <h2>
                Patient Details
            </h2>

            <table border="1">

                <thead>

                    <tr>

                        <th>  ID  </th>
                        <th> Name</th>
                        <th> Email </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        patients.map(patient => (


                            <tr key={patient.id}>

                                <td> {patient.id} </td>

                                <td> {patient.name} </td>

                                <td> {patient.email} </td>

                            </tr>


                        ))

                    }

                </tbody>

            </table>

        </div>

    )

}

export default PatientList;