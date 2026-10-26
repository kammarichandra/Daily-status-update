import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import EmpDetails from "../Pages/EmpDetails";



describe("Employee Details Testing", () => {
  it("displays employee details", () => {
    render(
      <MemoryRouter initialEntries={["/employees/1"]}>
        <Routes>
          <Route
            path="/employees/:id"
            element={<EmpDetails />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Name: Chandra")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Role: Developer")
    ).toBeInTheDocument();
  });

  it("displays employee not found", () => {
    render(
      <MemoryRouter initialEntries={["/employees/99"]}>
        <Routes>
          <Route
            path="/employees/:id"
            element={<EmpDetails />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Employee Not Found")
    ).toBeInTheDocument();
  });
});