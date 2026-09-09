// Objects

// An object stores data in key-value pairs.

let obj = {
    name : "chandra",
    age : 23,
    gen : "male",
    role : "ase"
}
// . notation

console.log(obj.name);
console.log(obj.age);
console.log(obj.gen);
console.log(obj.role);
console.log(obj);

// [] notation 

console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["gen"]);
console.log(obj["role"]);
console.log(obj);

// updating properties 
obj.age = 24
obj.name = "sekhar"
// adding new propertie
obj.course = "js";
// deleting propertie
delete obj.role;
console.log(obj);

// nested obj 

let nested = {
    name : "chandra",
    age : 23,
    address : {
        city : "atp",
        pincode : 515751
    }
}

console.log(nested.address.city);
console.log(nested.address.pincode);

nested.address.city = "banglore";
console.log(nested.address.city);


let company = {
    name: "TechCorp",

    employee: {
        name: "chandra",

        contact: {
            email: "arun@example.com",
            phone: "123456789"
        }
    }
};

console.log(company.employee.name);
console.log(company.employee.contact.email);

// Object Methods
// A method is a function inside an object.

let person = {
    name : "ramesh",
    age : 24,
    greet : function(){
        console.log("heloo " + this.name)
    }
};
person.greet();
console.log(person);

// keys 

let stu = {
    name : "suresh",
    age : 23,
    gen : "male",
    role : "ase"
}

let kyes = Object.keys(stu);
console.log(kyes);

// using foreach loop 

Object.keys(stu).forEach((student)=>{
    console.log(student);
})
// values 
let values = Object.values(stu);

console.log(values);

// using looop 

Object.values(stu).forEach((key)=>{
    console.log(key)
});

// Object.entries()
// Returns an array containing key-value pairs.

let entries = Object.entries(stu);

console.log(entries);

// using loops
Object.entries(stu).forEach(([key,value])=>{
    console.log(key,value)
})

// Object Copying
// There are two important types:
// Shallow copy
// Deep copy

// Shallow copy
// A shallow copy copies the object's top-level properties.
// The easiest way is the spread operator ....

let per = {
    name: "Rahul",
    age: 25
}

let copy = {...per};
console.log(copy)
copy.name = "priya";

console.log(copy.name);
console.log(per.name);



// Deep Copy
// A deep copy creates a completely independent copy, including nested objects.

let person1 = {
    name : "sekhar",
    address : {
        city : "hyd"
    }
}

let copy1 = structuredClone(person1);
console.log(copy1)

copy1.address.city = "atp";

console.log(copy1.address.city);
console.log(person1.address.city);

let employee = {
    name: "chandra",
    age: 28,
    salary: 50000,

    address: {
        city: "Hyderabad",
        country: "India"
    },

    skills: ["JavaScript", "React", "Node.js"],

    introduce() {
        console.log(`Hi, I am ${this.name}`);
    }
};

// Print the employee's name.
console.log(employee.name)
// Print the employee's city.
console.log(employee.address.city);
// Add a department property.
employee.dept = "sales"
// Increase the salary to 60000.
employee.salary = 60000
// Add "MongoDB" to the skills array.
employee.skills = "MangoDB";
// Call the introduce() method.
employee.introduce();
// Print all keys using Object.keys().
let k = Object.keys(employee);
console.log(k);
// Print all values using Object.values().
let value = Object.values(employee);
console.log(value);
// Loop through the object using Object.entries().
let entries1 = Object.entries(employee);
console.log(entries1);
// Create a shallow copy.
let copr = {...employee};
console.log(copr);
let l = copr.address.city= "atp";
console.log(employee.address.city);
console.log(l);
// Create a deep copy.
// Change the city in the deep copy and verify that the original remains unchanged.