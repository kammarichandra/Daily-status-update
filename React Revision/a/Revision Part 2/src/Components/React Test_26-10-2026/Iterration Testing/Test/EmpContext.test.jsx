import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { useContext } from "react";
import { EmployeeContext, EmployeeProvider } from "../Context/EmpContext";

function EmployeeNames() {
  const { employees } = useContext(EmployeeContext);

  return <ul>{employees.map((employee) => <li key={employee.id}>{employee.name}</li>)}</ul>;
}

describe("Employee context", () => {
  it("provides the initial employees", () => {
    render(
      <EmployeeProvider>
        <EmployeeNames />
      </EmployeeProvider>
    );

    expect(screen.getByText("Chandra")).toBeInTheDocument();
    expect(screen.getByText("Rahul")).toBeInTheDocument();
  });
});