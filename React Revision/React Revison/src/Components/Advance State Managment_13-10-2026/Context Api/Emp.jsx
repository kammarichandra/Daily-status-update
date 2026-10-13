import { EmpContext } from "./Context/EmpContext";
import AddEmp from "./Components/AddEmp";
import EmpList from "./Components/EmpList";
import EmpDashboard from "./Components/EmpDashboard";

function Emp() {
  return (
    <EmpContext>
      <div>
        <h1>TeamSync Employee Management</h1>

        <EmpDashboard />
        <AddEmp />
        <EmpList />
        
      </div>
    </EmpContext>
  );
}

export default Emp;