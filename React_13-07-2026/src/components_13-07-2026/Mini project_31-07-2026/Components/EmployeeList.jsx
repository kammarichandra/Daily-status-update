import { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {

    let [selectedEmployee, setSelectedEmployee] = useState(null);

    return (
        <>
            <h2>Employee List</h2>

            <div className="employee-list">
                <table border="1" cellPadding="10" cellSpacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button
                                        onClick={() => setSelectedEmployee(employee)}
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedEmployee && (
                <div
                    className="employee-details"
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        backgroundColor: "#f9f9f9",
                    }}
                >
                    <h2>Employee Details</h2>

                    <p>
                        <strong>ID:</strong> {selectedEmployee.id}
                    </p>

                    <p>
                        <strong>Name:</strong> {selectedEmployee.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {selectedEmployee.email}
                    </p>

                    <p>
                        <strong>Department:</strong>{" "}
                        {selectedEmployee.department || "IT"}
                    </p>

                    <p>
                        <strong>Designation:</strong>{" "}
                        {selectedEmployee.designation || "Software Engineer"}
                    </p>

                    <p>
                        <strong>Phone:</strong>{" "}
                        {selectedEmployee.phone || "+91 9876543210"}
                    </p>

                    <button onClick={() => setSelectedEmployee(null)}>
                        Close
                    </button>
                </div>
            )}
        </>
    );
}

export default EmployeeList;
