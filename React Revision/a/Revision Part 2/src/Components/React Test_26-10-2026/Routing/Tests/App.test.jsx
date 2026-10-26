import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App Testing", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("redirects unauthenticated users to login", () => {
    window.history.pushState({}, "", "/dashboard");

    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Login")
    ).toBeInTheDocument();
  });
});