
function createUser(type, name, email) {

    let user;

    switch (type.toLowerCase()) {

        case "admin":
            user = {
                type: "Admin",
                name: name,
                email: email,

                permissions: [
                    "Create Employee",
                    "Update Employee",
                    "Delete Employee",
                    "View Reports",
                    "Manage Users"
                ]
            };
            break;

        case "employee":
            user = {
                type: "Employee",
                name: name,
                email: email,

                permissions: [
                    "View Profile",
                    "Update Profile",
                    "View Attendance"
                ]
            };
            break;

        case "manager":
            user = {
                type: "Manager",
                name: name,
                email: email,

                permissions: [
                    "View Employees",
                    "Approve Leave",
                    "View Reports",
                    "Manage Team"
                ]
            };
            break;

        default:
            throw new Error("Invalid user type!");
    }

    return user;
}

// Export factory function
export default createUser;
