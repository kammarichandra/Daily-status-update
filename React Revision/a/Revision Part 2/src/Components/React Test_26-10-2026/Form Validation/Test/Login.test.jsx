import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Components/Login";



describe("Login Component", () => {
  it("renders the login form", () => {
    render(<Login />);

    expect(
      screen.getByRole("heading", { name: "Login" })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Login" })
    ).toBeInTheDocument();
  });

  it("shows error when fields are empty", async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "All fields are required"
    );
  });

  it("shows error for invalid email", async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.type(screen.getByLabelText("Email"), "invalidemail");
    await user.type(screen.getByLabelText("Password"), "password123");

    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Invalid email address"
    );
  });

  it("shows error for short password", async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.type(screen.getByLabelText("Email"), "test@gmail.com");
    await user.type(screen.getByLabelText("Password"), "123");

    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Password must be at least 6 characters"
    );
  });

  it("shows success message for valid login", async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.type(screen.getByLabelText("Email"), "test@gmail.com");
    await user.type(screen.getByLabelText("Password"), "password123");

    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Login successful"
    );
  });
});