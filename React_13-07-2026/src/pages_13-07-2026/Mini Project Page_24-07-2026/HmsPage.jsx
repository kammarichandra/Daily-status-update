import React, { useState } from "react";
import Login from "../../components_13-07-2026/Mini Project_24-07-2026/Components/Login";
import PatientForm from "../../components_13-07-2026/Mini Project_24-07-2026/Components/PatientForm";
import PatientList from "../../components_13-07-2026/Mini Project_24-07-2026/Components/PatientList";
import withAuth from "../../components_13-07-2026/Mini Project_24-07-2026/Hoc/WithAuth";

// import Login from "../Components/Login";

// import PatientForm from "../Components/PatientForm";

// import PatientList from "../Components/PatientList";

// import withAuth from "../Hoc/WithAuth";



function HmsHome() {


    const [isLoggedIn, setIsLoggedIn] = useState(false);



    return (

        <div>


            <h1>
                Hospital Management System
            </h1>



            {
                isLoggedIn ?


                (

                    <>

                        <button

                        onClick={() => setIsLoggedIn(false)}

                        >

                            Logout

                        </button>



                        <PatientForm />


                        <PatientList />


                    </>


                )


                :


                (

                    <Login 

                    onLogin={() => setIsLoggedIn(true)}

                    />

                )

            }



        </div>

    );

}



export default withAuth(HmsHome);