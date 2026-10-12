import { useParams, Link } from "react-router-dom";

function EmpDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Employee ID: {id}</p>
      <p>Name: Sample Employee</p>
      <p>Department: Engineering</p>

      <Link to="/employees">Back to Employees</Link>
    </div>
  );
}

export default EmpDetails;