
import { describe, it, expect } from "vitest";

import {
  render,
  screen,
  within,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import EmpList from "../Components/EmpList";


describe("EmployeeList Component", () => {
  it("renders the employee list correctly", () => {
    render(<EmpList />);

    expect(
      screen.getByText("Chandra")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Ravi")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Priya")
    ).toBeInTheDocument();
  });

  it("displays the correct employee roles", () => {
    render(<EmpList />);

    expect(
      screen.getByText("Role: Software Engineer")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Role: Frontend Developer")
    ).toBeInTheDocument();
  });

  it("searches employees by name", async () => {
    const user = userEvent.setup();

    render(<EmpList />);

    const searchInput =
      screen.getByRole("textbox", {
        name: "Search Employee",
      });

    await user.type(searchInput, "Chandra");

    expect(
      screen.getByText("Chandra")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Ravi")
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Priya")
    ).not.toBeInTheDocument();
  });

  it("displays no employees found when search has no match", async () => {
    const user = userEvent.setup();

    render(<EmpList />);

    await user.type(
      screen.getByRole("textbox", {
        name: "Search Employee",
      }),
      "Unknown"
    );

    expect(
      screen.getByText("No employees found")
    ).toBeInTheDocument();
  });

  it("changes employee status from Active to Inactive", async () => {
    const user = userEvent.setup();

    render(<EmpList />);

    const chandra = screen.getByRole("heading", { name: "Chandra" }).closest("li");

    await user.click(
      screen.getByRole("button", {
        name: "Mark Chandra Inactive",
      })
    );

    expect(
      within(chandra).getByText("Inactive")
    ).toBeInTheDocument();

    expect(
      within(chandra).getByRole("button", {
        name: "Mark Chandra Active",
      })
    ).toBeInTheDocument();
  });

  it("changes employee status from Inactive to Active", async () => {
    const user = userEvent.setup();

    render(<EmpList />);

    const ravi = screen.getByRole("heading", { name: "Ravi" }).closest("li");

    await user.click(
      screen.getByRole("button", {
        name: "Mark Ravi Active",
      })
    );

    expect(
      within(ravi).getByText("Active")
    ).toBeInTheDocument();

    expect(
      within(ravi).getByRole("button", {
        name: "Mark Ravi Inactive",
      })
    ).toBeInTheDocument();
  });

  it("clears the search and displays all employees", async () => {
    const user = userEvent.setup();

    render(<EmpList />);

    const searchInput =
      screen.getByRole("textbox", {
        name: "Search Employee",
      });

    await user.type(searchInput, "Chandra");

    expect(
      screen.queryByText("Ravi")
    ).not.toBeInTheDocument();

    await user.clear(searchInput);

    expect(
      screen.getByText("Chandra")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Ravi")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Priya")
    ).toBeInTheDocument();
  });
});
