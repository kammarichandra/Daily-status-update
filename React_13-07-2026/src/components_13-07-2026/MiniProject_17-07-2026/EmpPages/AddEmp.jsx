import { useState, useContext } from "react";
import { EmpContext } from "../EmpContext/EmpContext";

function AddEmp() {
  const { addEmployee } = useContext(EmpContext);

  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const employee = {
      id: Date.now(),
      name,
      email: `${name}@gmail.com`,
      company: {
        name: "New Company",
      },
      phone: "9876543210",
    };

    addEmployee(employee);
    setName("");
  };

  return (
    <div>
      <h1>Add Employee</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Employee Name"
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddEmp;