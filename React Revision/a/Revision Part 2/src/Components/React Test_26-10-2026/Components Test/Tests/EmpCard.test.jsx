import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EmpCard from "../Components/EmpCard";


describe("EmployeeCard Component", () => {
  const employee = {
    id: 101,
    name: "Chandra",
    role: "Software Engineer",
    email: "chandra@example.com",
  };

  it("renders employee details correctly", () => {
    render(
      <EmpCard employee={employee} />
    );

    expect(
      screen.getByText("Chandra")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Employee ID: 101")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Role: Software Engineer")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Email: chandra@example.com")
    ).toBeInTheDocument();
  });

  it("displays the correct employee name", () => {
    render(
      <EmpCard employee={employee} />
    );

    expect(
      screen.getByRole("heading", {
        name: "Chandra",
      })
    ).toBeInTheDocument();
  });

  it("displays the correct employee role", () => {
    render(
      <EmpCard employee={employee} />
    );

    expect(
      screen.getByText("Role: Software Engineer")
    ).toBeInTheDocument();
  });
});