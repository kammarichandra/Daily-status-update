import React from "react";

const EmployeeCard = React.memo(({ employee }) => {

  console.log(employee.name, "Rendered");

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>{employee.name}</h3>
      <p>Email : {employee.email}</p>
      <p>Phone : {employee.phone}</p>
      <p>Company : {employee.company.name}</p>
    </div>
  );
});

export default EmployeeCard;