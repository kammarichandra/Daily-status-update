
import { useNavigate } from "react-router-dom";

function AddEmployee() {

  const navigate = useNavigate();

  const handleSubmit = (e)=> {
    
    e.preventDefault();

    alert("Employee added successfully!");

    navigate("/employees");
  }

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="Employee Name" required />

        <input type="text" placeholder="Department" required />

        <input type="number" placeholder="Salary" required />

        <button type="submit"> Add Employee </button>

      </form>
    </div>
  );
}

export default AddEmployee;
