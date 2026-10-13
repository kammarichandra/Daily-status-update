import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    { id: 1, name: "Rahul", department: "IT" },
    { id: 2, name: "Priya", department: "HR" },
  ],
};

const employeeSlice = createSlice({ name: "employees", initialState,

  reducers: {
    // Add Employee
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },

    // Update Employee
    updateEmployee: (state, action) => {
      const employee = state.employees.find(
        (emp) => emp.id === action.payload.id
      );

      if (employee) {
        employee.name = action.payload.name;
        employee.department = action.payload.department;
      }
    },

    // Delete Employee
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee,} = employeeSlice.actions;

export default employeeSlice.reducer;