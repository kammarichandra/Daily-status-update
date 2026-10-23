
const API_URL = "https://jsonplaceholder.typicode.com/users";

async function request(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(
      `API Error: ${response.status}`
    );
  }

  return response.json();
}

export const employeeService = {
    
  // GET employees
  getEmployees() {
    return request(API_URL);
  },

  // GET employee by ID
  getEmployeeById(id) {

    return request(`${API_URL}/${id}`);

  },

  // POST employee
  addEmployee(employee) {

    return request(API_URL, {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(employee),
    });
  },

  // PUT employee
  updateEmployee(id, employee) {

    return request(`${API_URL}/${id}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(employee),
    });
  },

  // DELETE employee
  
  deleteEmployee(id) {
    return request(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  },
};
