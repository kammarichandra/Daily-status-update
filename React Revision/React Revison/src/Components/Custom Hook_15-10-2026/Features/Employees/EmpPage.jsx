import Button from "../../../Reusable Components_15-10-2026/Components/Button";
import EmpList from "./EmpList";
import UseEmp from "./UseEmp";

export default function EmpPage() {
  const {
    employees,
    loading,
    error,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    refreshEmployees,
  } = UseEmp();

  if (loading) {
    return <p>Loading employees...</p>;
  }

  if (error) {
    return (
      <div>
        <p role="alert">{error}</p>
        <Button onClick={refreshEmployees}>
          Retry
        </Button>
      </div>
    );
  }

  return (
    <main className="page-container">
      <h1>Employee Management</h1>

      <Button
        onClick={() =>
          addEmployee({
            name: "New Employee",
            email: "new@example.com",
            role: "Developer",
          })
        }
      >
        Add Employee
      </Button>

      <EmpList employees={employees} />

      <h2>Manage Employees</h2>

      {employees.map((employee) => (
        <div key={employee.id}>
          <span>{employee.name} </span>

          <Button
            variant="secondary"
            onClick={() =>
              updateEmployee(employee.id, {
                status:
                  employee.status === "Active"
                    ? "Inactive"
                    : "Active",
              })
            }
          >
            Toggle Status
          </Button>

          <Button
            variant="danger"
            onClick={() => deleteEmployee(employee.id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </main>
  );
}