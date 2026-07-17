import { useContext } from "react";

import { EmpContext } from "../EmpContext/EmpContext";


function DashboardPage() {


    let {  employees } = useContext(EmpContext);



    return (

        <div>
            <h1> Employee Dashboard </h1>

            <h2> Total Employees : {employees.length}</h2>

        </div>

    )

}


export default DashboardPage;