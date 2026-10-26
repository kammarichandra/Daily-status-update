import { describe, it, expect } from "vitest";

import employeeReducer from "../Context/EmpReduser";

describe("Employee Reducer", () => {
  it("adds an employee", () => {
    const state = [];

    const action = {
      type: "ADD",
      payload: {
        id: 1,
        name: "Chandra",
        role: "Developer",
      },
    };

    const result = employeeReducer(state, action);

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Chandra");
  });

  it("deletes an employee", () => {
    const state = [
      { id: 1, name: "Chandra", role: "Developer" },
    ];

    const result = employeeReducer(state, {
      type: "DELETE",
      payload: 1,
    });

    expect(result).toHaveLength(0);
  });
});