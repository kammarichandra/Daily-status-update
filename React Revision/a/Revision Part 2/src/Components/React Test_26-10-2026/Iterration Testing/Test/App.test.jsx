import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Login";

describe("Login flow", () => {
  it("navigates to the dashboard after login", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </Routes>
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByRole("heading", { name: "Dashboard" })).toBeInTheDocument();
    expect(localStorage.getItem("isLoggedIn")).toBe("true");
  });
});