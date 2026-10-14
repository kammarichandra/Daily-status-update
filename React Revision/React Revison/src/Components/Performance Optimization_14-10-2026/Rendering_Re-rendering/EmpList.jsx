import Empcard from "./Empcard";

function EmpList() {
  console.log("EmployeeList rendered");

  const employees = [
    { id: 1, name: "Rahul", role: "Developer" },
    { id: 2, name: "Priya", role: "Tester" },
    { id: 3, name: "Arun", role: "Designer" },
  ];

  return (
    <section>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <Empcard
          key={employee.id}
          employee={employee}
        />
      ))}
    </section>
  );
}

export default EmpList;