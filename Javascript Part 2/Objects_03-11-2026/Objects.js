const employee = {
    id: 101,
    name: "Chandra",
    department: "IT",
    salary: 35000
};

// Display employee details
console.log(employee);

// Object destructuring
const { name, salary } = employee;

console.log(name);
console.log(salary);

// Add new property
employee.email = "chandra@gmail.com";

// Update salary
employee.salary = 45000;
 
console.log(employee);

const employee1 = {
    id: 101,
    name: "Chandra",
    department: "IT"
};

const employee2 = {...employee1};

employee2.name = "Sekhar";
employee2.age = 23

const emp = Object.assign({} , ...employee1);

console.log(employee1);
console.log(employee2);

// shallow copy vs deep copy

const stu = {
    name: "Chandra",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

const shallowCopy = { ...stu };

shallowCopy.address.city = "Bangalore";

console.log(stu.address.city);