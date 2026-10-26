
import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Counter from "../Components/Counter";


describe("Counter Component", () => {

  it("renders the initial count as zero", () => {
    render(<Counter />);

    expect(
      screen.getByText("Count : 0")
    ).toBeInTheDocument();
  });

  it("increments the count", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(
      screen.getByRole("button", {
        name: "inc",
      })
    );

    expect(
      screen.getByText("Count : 1")
    ).toBeInTheDocument();
  });

  it("decrements the count", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(
      screen.getByRole("button", {
        name: "dec",
      })
    );

    expect(
      screen.getByText("Count : -1")
    ).toBeInTheDocument();
  });

  it("resets the count to zero", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(
      screen.getByRole("button", {
        name: "inc",
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: "inc",
      })
    );

    expect(
      screen.getByText("Count : 2")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "reset",
      })
    );

    expect(
      screen.getByText("Count : 0")
    ).toBeInTheDocument();
  });

  it("increments and decrements multiple times", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole(
      "button",
      { name: "inc" }
    );

    const decrementButton = screen.getByRole(
      "button",
      { name: "dec" }
    );

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(
      screen.getByText("Count : 3")
    ).toBeInTheDocument();

    await user.click(decrementButton);

    expect(
      screen.getByText("Count : 2")
    ).toBeInTheDocument();
  });

});
