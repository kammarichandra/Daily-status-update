import React, { useState } from "react";

import PatientForm from "../Components/PatientForm";
import PatientList from "../Components/PatientList";
import withAuth from "../Hoc/WithAuth";

function HmsHome() {

    let [isLoggedIn, setIsLoggedIn] = useState(true);

    return (

        <div>

            <h1>
                Hospital Management System
            </h1>


            {
                isLoggedIn ?

                (
                    <>
                        <button onClick={() => setIsLoggedIn(false)}> Logout </button>

                        <PatientForm />

                        <PatientList />
                    </>
                ):
                (
                    <>
                    <h2>  Please Login </h2>

                    <button onClick={() => setIsLoggedIn(true)} > Login </button>

                    </>

                )

            }


        </div>

    );

}


export default withAuth(HmsHome);