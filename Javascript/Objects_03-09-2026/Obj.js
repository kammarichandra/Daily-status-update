let obj = {
    name : "candra",
    age : 24,
    gender : "male",
    role : "ase"
};

// . notation 

console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);
console.log(obj.role);
console.log(obj.email);

// adding new property 

obj.email= "chandra@gmail.com";

// updating property

obj.age = 23;

// delete property

delete obj.age;


// [] notation

console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["gender"]);
console.log(obj["role"]);
console.log(obj["mobile"])

// car

let car = {
    brand : "suzuki xl6",
    model : "hybrid",
    year : 2026,
    color : "red"
}

console.log(car.brand);
console.log(car["model"]);
car.color = "white";
car.price = 150000;
delete car.year;


// nested obj 

const student = {

    name: "Rahul",
    age: 21,

    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500001
    },

    marks: {
        javascript: 85,
        html: 90,
        css: 88
    }

};

console.log(student.address.city);
console.log(student.address.pincode);

console.log(student.marks.html);
console.log(student.marks.css);

student.marks.javascript = 95;

console.log(student.marks.javascript);


// chanllange 

const employee = {
    name: "Amit",

    company: {
        name: "TechCorp",
        location: {
            city: "Hyderabad",
            country: "India"
        }
    }
};

// Amit
// TechCorp
// Hyderabad
// India

console.log(employee.name);// amit

console.log(employee.company.name); // techcrop

console.log(employee.company.location.city); // hyd

console.log(employee.company.location.country); // ind


// obj destructuring 
// without destructuring 
let destructure = {
    name : "chandra",
    age : "23",
    gender : "male",
    city : "atp"
};

console.log(destructure.name);
console.log(destructure.age);
console.log(destructure.city);
console.log(destructure.gender);


// with destructring 

let {name , age ,city , gender} = destructure

console.log(name);
console.log(age);
console.log(gender);
console.log(city);

// renameing variables

let emp = {
    name : "chandra",
    age : 23
}

let {name: empname , age : empage} = emp;

console.log(empage);
console.log(empname);

// nested destructuring 

let nested = {
    name1 : "rahul",
    address : {
        city1 : "atp",
        pincode : 5151751
    }
}

let {name1 , address : {city1,pincode}} = nested

console.log(name1);
console.log(city1);
console.log(pincode);

// spread operator 
// it will spread properties  into another object 

const student1 = {
    name: "Rahul",
    age: 21
};

const studentCopy = {
    ...student1
};

console.log(studentCopy);

// combining two obj

const personalDetails = {
    name: "Rahul",
    age: 21
};

const educationDetails = {
    course: "JavaScript",
    experience: "Beginner"
};

const student2 = {
    ...personalDetails,
    ...educationDetails
};

console.log(student2);

// updating obj using spread operator 

let stu = {
    name : "ramesh",
    age : 23,
}

let updatedstu = {
    ...stu,
    age : 24
}

console.log(updatedstu);

// rest operator 

const student5 = {
    name2: "Rahul",
    age: 21,
    course: "JavaScript",
    city: "Hyderabad"
};

const { name2, ...otherDetails } = student;

console.log(name2);
console.log(otherDetails);

// rest operator using fun
 
function a(...numbers){
    console.log(numbers)
}
a(1,2,3,4,5,6,7,8,8,9,0);

function addNumbers(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total;
}

console.log(addNumbers(10, 20, 30));
console.log(addNumbers(5, 10, 15, 20));

let students = {

    name3: "Rahul",
    age3: 21,

    address: {
        city2: "Hyderabad",
        state: "Telangana"
    },

    marks: {
        javascript: 90,
        html: 85,
        css: 88
    }

};

//obj destructuring 

let {name3 , age3} = students

console.log(name3);
console.log(age3);

// nested destructure

let {address : {city2 , state}} = students

console.log(city2);
console.log(state);

// spread operator 

let updatedStudent = {
    ...student,
    age: 22
};
console.log(updatedStudent);

// rest operator 

let { name: studentName, ...remainingDetails } = students;

console.log(studentName);
console.log(remainingDetails);

// throw new Error("data failed..")

// ...objname