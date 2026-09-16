let student = {

    id: 101,
    name: "Rahul",
    age: 22,
    course: "Java"

};

console.log(student);

// nested objects 

let obj = {
    name : "chandra",
    age : 23,
    address : {
        city : "atp",
        pincode : 515751
    }
}

console.log(obj.address.city);
console.log(obj.address.pincode);

// deep nested obj

let company = {
    name: "TechCorp",

    manager: {
        name: "Arun",

        contact: {
            email: "arun@example.com",
            phone: "9876543210"
        }
    }
};
console.log(company.manager.contact.email);

// accessing properties
console.log("accessing properties : ")
let employee = {
    name: "Ravi",
    salary: 30000
};

console.log(employee.name);
console.log(employee.salary);

//[] notation

console.log(employee["name"]);
console.log(employee["salary"]);

// updating properties 
console.log("deleting properties : ");

let emp = {
    name : "chandra",
    role : "ase",
}

emp.role = "ASE";

console.log(emp);

// adding property

emp.dept = "it";
emp.age = 23;
console.log(emp)

// deleting property

delete emp.age;
console.log(emp);

// object methods 

console.log("object methods : ");

let obj1 = {
    name : "charan",
    age : 14,
    display : function(){
        console.log(this.name);
        console.log(this.age);
    }
}
obj1.display();

let employee1 = {
    name : "chandra",

    hai(){
        console.log("heloo " + this.name);
    }
} 
employee1.hai();

//object keyss

let emp1 = {
    name : "ramesh",
    age : 23,
    role : "ase",
    phone :1234567890
}

let keys = Object.keys(emp1);

console.log(keys);

// values 

let values = Object.values(emp1);
console.log(values);

// entries
let entries = Object.entries(emp1);
console.log(entries);

// using for of 

for(let [key,value] of Object.entries(emp1)){
    console.log(key," : ",value);
}

// object destructuring 

let names ={
    name : "rahul",
    age : 23,
    role : "ase",
    gen : "male"
}

let{ name , age , role , gen } = names;

console.log(name);
console.log(age);
console.log(role);
console.log(gen);

// nested object destructuring 

let object = {
    name1 : "suresh",
    age1 : 23,
    address : {
        city : "atp",
        pincode : 515751
    }
}

let {name1 , age1 , address:{city , pincode}} = object

console.log(name1);
console.log(age1);
console.log(city);
console.log(pincode); 

// Spread Operator ...
// The spread operator copies properties from one object into another.

let employee2 = {
    name : "chandra",
    age : 24,
    gen : "male",
    role : "ase"
}

let updated = {...employee2 ,age : 23};

console.log(updated);

// merge objects

let personal = {
    name: "Ravi",
    age: 25
};

let professional = {
    job: "Developer",
    salary: 40000
};

let employee3 = {
    ...personal,
    ...professional
};

console.log(employee3);

// rest operator 
// Rest collects multiple properties into another object.

let employee4 = {
    name2: "Ravi",
    age: 25,
    salary: 30000,
    department: "IT"
};

let { name2, ...otherDetails } = employee4;

console.log(name2);
console.log(otherDetails);

// shallow copy

let obj2 = {
    name : "ravi",
    age : 23,
}

let copy = {...obj2};

copy.name = "chandra";

console.log(obj2.name);
console.log(copy.name);

// deep copy 
// A deep copy creates independent copies of nested objects as well.
let employee5 = {
    name: "Ravi",

    address: {
        city: "Hyderabad"
    }
};

let copy = (employee5);
copy.address.cistructuredClonety = "Warangal";
console.log(employee5.address.city);
console.log(copy.address.city);
