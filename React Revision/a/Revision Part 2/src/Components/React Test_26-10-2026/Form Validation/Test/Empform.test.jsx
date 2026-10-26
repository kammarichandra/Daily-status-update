import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Empform from "../Components/Empform";


describe("EmployeeForm Component", () => {
  it("renders employee form fields", () => {
    render(<Empform onSubmit={vi.fn()} />);

    expect(
      screen.getByRole("heading", { name: "Add Employee" })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Role")).toBeInTheDocument();
  });

  it("shows error when fields are empty", async () => {
    const user = userEvent.setup();

    render(<Empform onSubmit={vi.fn()} />);

    await user.click(
      screen.getByRole("button", { name: "Add Employee" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "All fields are required"
    );
  });

  it("shows error for invalid email", async () => {
    const user = userEvent.setup();

    render(<Empform onSubmit={vi.fn()} />);

    await user.type(screen.getByLabelText("Name"), "Chandra");
    await user.type(screen.getByLabelText("Email"), "invalidemail");
    await user.type(screen.getByLabelText("Role"), "Developer");

    await user.click(
      screen.getByRole("button", { name: "Add Employee" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Invalid email address"
    );
  });

  it("submits employee details when form is valid", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<Empform onSubmit={handleSubmit} />);

    await user.type(screen.getByLabelText("Name"), "Chandra");
    await user.type(screen.getByLabelText("Email"), "chandra@gmail.com");
    await user.type(screen.getByLabelText("Role"), "Developer");

    await user.click(
      screen.getByRole("button", { name: "Add Employee" })
    );

    expect(handleSubmit).toHaveBeenCalledTimes(1);

    expect(handleSubmit).toHaveBeenCalledWith({
      name: "Chandra",
      email: "chandra@gmail.com",
      role: "Developer",
    });
  });
});