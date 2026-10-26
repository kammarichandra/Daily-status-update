import { describe, it, expect } from "vitest";

import {
  render,
  screen,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { MemoryRouter } from "react-router-dom";
import { EmployeeProvider } from "../Context/EmpContext";
import EmpList from "../Components/EmpList";



describe("Employee Workflow", () => {
  it("adds and deletes an employee", async () => {
    const user = userEvent.setup();

    render(
      <EmployeeProvider>
        <MemoryRouter>
          <EmpList />
        </MemoryRouter>
      </EmployeeProvider>
    );

    await user.type(
      screen.getByPlaceholderText("Employee Name"),
      "Kiran"
    );

    await user.click(
      screen.getByRole("button", {
        name: "Add Employee",
      })
    );

    expect(
      screen.getByText("Kiran")
    ).toBeInTheDocument();

    const deleteButtons = screen.getAllByRole(
      "button",
      { name: "Delete" }
    );

    await user.click(deleteButtons[2]);

    expect(
      screen.queryByText("Kiran")
    ).not.toBeInTheDocument();
  });
});