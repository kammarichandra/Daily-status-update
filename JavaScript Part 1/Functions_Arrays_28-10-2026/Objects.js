let employees = [
    { id: 101, name: "Ravi", salary: 25000, department: "IT" },
    { id: 102, name: "Suresh", salary: 35000, department: "HR" },
    { id: 103, name: "Kiran", salary: 45000, department: "IT" },
    { id: 104, name: "Priya", salary: 30000, department: "Finance" },
    { id: 105, name: "Anu", salary: 50000, department: "IT" }
];

let names = employees.map(emp => emp.name);

console.log(names)

let result = employees.filter(emp => emp.salary > 30000);

console.log(result);

let dept = employees.filter(emp => emp.department === "IT");

console.log(dept);

// with id 

let id = employees.filter(emp => emp.id === 103);
console.log(id)

// calculate total sallay

let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

console.log(total);

let avgsal = total / employees.length;
console.log(avgsal);

// heighest paid sallary

let heighest = employees.reduce((emp, highest) => {
    return emp.salary > highest.salary ? emp : highest
})

console.log(heighest);

// sort the sallary

const result1 = [...employees].sort((a, b) => {
    return a.salary - b.salary;
});

console.log(result1);

// calculate sallary for it dept 

const it = employees
    .filter(emp => emp.department === "IT")
    .reduce((total, emp) => total + emp.salary, 0);

console.log(it);

// obj and destructuring 

const employee = {
    id: 101,
    name: "Chandra",
    age: 25,
    department: "IT",
    salary: 35000
};

console.log(employee.id);
console.log(employee.name);
console.log(employee.age);
console.log(employee.department);
console.log(employee.salary);

// bracket

console.log(employee["id"]);
console.log(employee["name"]);
console.log(employee["department"]);
console.log(employee["salary"]);

// add the property

employee.experience = 2;
console.log(employee);

// delete 
delete employee.age;

console.log(employee);

const employee = {
    id: 101,
    name: "Chandra",
    age: 25,
    department: "IT",
    salary: 35000,

    getDetails() {
        return `Employee ID: ${this.id},
                Name: ${this.name},
                Department: ${this.department},
                Salary: ${this.salary}`;
    }
};

console.log(employee.getDetails());

// Object.keys

const keys = Object.keys(employee);

console.log(keys);

// Object.values

const values = Object.values(employee);

console.log(values);

// Object.entries

const entries = Object.entries(employee);

console.log(entries);

const employee1 = {
    id: 101,
    name: "Ravi",

    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500001
    },

    department: {
        name: "IT",
        manager: "Suresh"
    }
};

console.log(employee1);
console.log(employee1.address.city);
console.log(employee1.department.manager);
console.log(employee1.department.name);

// update emp city

employee1.address.city = "Bangalore";

console.log(employee1.address.city);

// add the new property

employee1.address.country = "India";

console.log(employee1.address);


const emp = [
    {
        id: 101,
        name: "Ravi",

        address: {
            city: "Hyderabad",
            state: "Telangana",
            pincode: 500001
        },

        department: {
            name: "IT",
            manager: "Suresh"
        }
    },

    {
        id: 102,
        name: "Priya",

        address: {
            city: "Bangalore",
            state: "Karnataka",
            pincode: 560001
        },

        department: {
            name: "HR",
            manager: "Kiran"
        }
    },

    {
        id: 103,
        name: "Anu",

        address: {
            city: "Hyderabad",
            state: "Telangana",
            pincode: 500002
        },

        department: {
            name: "Finance",
            manager: "Ramesh"
        }
    },

    {
        id: 104,
        name: "Chandra",

        address: {
            city: "Chennai",
            state: "Tamil Nadu",
            pincode: 600001
        },

        department: {
            name: "IT",
            manager: "Suresh"
        }
    }
];

console.log(emp);

// filter
const res = emp.filter(
    emp1 => emp1.address.city === "Hyderabad"
);

console.log(res);