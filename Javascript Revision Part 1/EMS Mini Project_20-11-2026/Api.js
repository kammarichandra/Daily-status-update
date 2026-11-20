
export async function fetchEmployees() {

    try {
        
        const response = await fetch( "https://dummyjson.com/users?limit=10");

        if (!response.ok) {
            throw new Error("Failed to fetch employees");
        }

        const data = await response.json();

        return data.users.map(user => ({
            empId: `API-${user.id}`,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            phone: user.phone.replace(/\D/g, "").slice(-10),
            department: user.company.department || "IT",
            designation: user.company.title || "Employee",
            salary: user.bank.cardNumber ? 30000 : 25000,
            joiningDate: new Date().toISOString().slice(0, 10),
            status: "Active"
        }));

    } catch (error) {
        throw new Error(error.message);
    }
}
