import { useMemo, useState } from "react";
import EmpList from "./EmpList";
import EmpStats from "./EmpStats";


const initialEmployees = [
  { id: 1, name: "Rahul", department: "IT", salary: 50000 },
  { id: 2, name: "Priya", department: "HR", salary: 60000 },
  { id: 3, name: "Arun", department: "IT", salary: 70000 },
  { id: 4, name: "Sneha", department: "Finance", salary: 55000 },
  { id: 5, name: "Kiran", department: "HR", salary: 65000 },
  { id: 6, name: "Divya", department: "Finance", salary: 60000 },
];

function EmployeeDashboard() {

  const [employees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("All");
  const [counter, setCounter] = useState(0);

  console.log("EmployeeDashboard rendered");

  // Memoize search and department filtering.
  const filteredEmployees = useMemo(() => {
    console.log("Filtering employees...");

    // Simulate an expensive calculation for practice.
    let result = employees.filter((employee) => {

      const matchesName = employee.name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment =
        department === "All" ||
        employee.department === department;

      return matchesName && matchesDepartment;
    });

    return result;
  }, [employees, searchTerm, department]);

  // Memoize salary calculations.
  const salaryStats = useMemo(() => {
    console.log("Calculating salary statistics...");

    const totalSalary = filteredEmployees.reduce(
      (total, employee) => total + employee.salary,0 );

    const averageSalary = filteredEmployees.length > 0
     ? totalSalary / filteredEmployees.length
     : 0;

    return { totalSalary, averageSalary, employeeCount: filteredEmployees.length, };
  }, [filteredEmployees]);

  return (
    <div className="dashboard">
      <h1>TeamSync Employee Dashboard</h1>

      <EmpStats stats={salaryStats} />

      <div className="filters">
        <input type="text" placeholder="Search employee..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />

        <select value={department} onChange={(event) => setDepartment(event.target.value)} >
          <option value="All">All Departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      <EmpList employees={filteredEmployees} />

      <hr />

      <h3>Unrelated State Test</h3>
      <p>Counter: {counter}</p>

      <button onClick={() => setCounter((value) => value + 1)}> Increment Counter </button>
    </div>
  );
}

export default EmployeeDashboard;