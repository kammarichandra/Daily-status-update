const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);

// obj destructuring 

const employee = {
    id: 101,
    name: "Chandra",
    salary: 30000
};

const { id, name, salary } = employee;

console.log(id, name, salary);

let student = {
    name: "Rahul",
    age: 22
};

let {
    name: studentName,
    age: studentAge
} = student;

console.log(studentName);
console.log(studentAge);

// nested object destructuring 

let employee1 = {
    name: "Chandra",
    department: "IT",

    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

let {
    name1,
    department,
    address: { city, state }
} = employee1;

console.log(name1);
console.log(department);
console.log(city);
console.log(state);

// spread and rest operators 

// 1. Merge Two Arrays

let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

let mergedArray = [...arr1, ...arr2];

console.log("1. Merged Array:", mergedArray);


// 2. Copy an Existing Array

let original = [10, 20, 30, 40];

let copiedArray = [...original];

console.log("2. Original Array:", original);
console.log("   Copied Array:", copiedArray);


// 3. Merge Two Objects

let student1 = {
    name: "Chandra",
    age: 23
};

let course = {
    courseName: "JavaScript",
    duration: "3 Months"
};

let mergedObject = { ...student1, ...course };

console.log("3. Merged Object:", mergedObject);


// 4. Find Maximum Number Using Spread

let numbers1 = [10, 50, 25, 90, 35, 70];

let maximum = Math.max(...numbers1);

console.log("4. Maximum Number:", maximum);


// 5. Function Accepting Unlimited Arguments Using Rest

function addNumbers(...numbers1) {
    let sum = 0;

    for (let num of numbers1) {
        sum += num;
    }

    return sum;
}

console.log("5. Sum:", addNumbers(10, 20));
console.log("   Sum:", addNumbers(10, 20, 30));
console.log("   Sum:", addNumbers(10, 20, 30, 40, 50));