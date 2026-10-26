import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";


describe("Header Component", () => {
  it("renders the header correctly", () => {
    render(
      <Header
        title="TeamSync"
        username="Chandra"
      />
    );

    expect(
      screen.getByText("TeamSync")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Welcome, Chandra")
    ).toBeInTheDocument();
  });

  it("displays the correct title prop", () => {
    render(
      <Header
        title="Employee Management System"
        username="Admin"
      />
    );

    expect(
      screen.getByText("Employee Management System")
    ).toBeInTheDocument();
  });

  it("displays the correct username prop", () => {
    render(
      <Header
        title="TeamSync"
        username="Admin"
      />
    );

    expect(
      screen.getByText("Welcome, Admin")
    ).toBeInTheDocument();
  });
});