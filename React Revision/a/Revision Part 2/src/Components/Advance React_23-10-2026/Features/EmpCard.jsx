import Button from "../Components/Button";



function EmpCard({ employee, onView, onDelete }) {

  return (
    <div className="employee-card">
        
      <h3>{employee.name}</h3>

      <p>ID: {employee.id}</p>

      <p>Department: {employee.department}</p>

      <p>Salary: ₹{employee.salary}</p>

      <Button onClick={() => onView(employee.id)}> View </Button>

      <Button variant="danger" onClick={() => onDelete(employee.id)} > Delete </Button>

    </div>
  );
}

export default EmpCard;
