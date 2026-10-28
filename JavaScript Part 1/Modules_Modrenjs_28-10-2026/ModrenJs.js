const numbers = [10, 20, 30, 40, 50];

const copiedNumbers = [...numbers];

console.log(copiedNumbers);

console.log(numbers === copiedNumbers);

// merge using spread 

const frontend = ["HTML", "CSS", "JavaScript"];

const backend = ["Java", "Spring Boot", "MySQL"];

const fullStack = [...frontend, ...backend];

console.log(fullStack);

// copy of an object 

const employee = {
    id: 101,
    name: "Ravi",
    salary: 30000
};

const copiedEmployee = { ...employee };

const updatedEmployee = {
    ...employee,
    salary: 40000
};

console.log(updatedEmployee);
console.log(copiedEmployee);


function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30));

const employee1 = {
    id: 101,
    name: "Ravi",
    department: "IT",
    salary: 30000
};

const employeeDetails = `Employee ID: ${employee.id}
Name: ${employee1.name}
Department: ${employee1.department}
Salary: ₹${employee1.salary}`;

console.log(employeeDetails);

// optional chaining 

const emp = {
    name: "Ravi",
    dept : null,
    address: {
        city: "Hyderabad"
    }
};

console.log(emp.address?.city);
console.log(emp.contact?.phone);

//Nullish Coalescing (??)
const department = emp.dept ?? "Not Assigned";

console.log(department)

// enhanced obj litrels 

const stu = {
    name: "Ravi",
    salary: 30000,

    getDetails() {
        return `Name: ${this.name}, Salary: ₹${this.salary}`;
    },

    increaseSalary(amount) {
        this.salary += amount;
    }
};

console.log(stu.getDetails());

stu.increaseSalary(5000);

console.log(stu.getDetails());