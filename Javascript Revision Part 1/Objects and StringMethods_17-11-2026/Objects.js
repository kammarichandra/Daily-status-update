let employee = {
    id: 101,
    name: "Chandra",
    role: "Software Engineer",
    salary: 30000
};

// Access properties
console.log(employee.name);
console.log(employee.salary);

// Update property
employee.salary = 35000;

// Add new property
employee.department = "Development";

// Delete property
delete employee.role;

console.log(employee);

// obj practice 

// 1. Create a Student Object

let student = {
    name: "Chandra",
    age: 22,
    course: "JavaScript",
    marks: 85
};

console.log("Student Object:", student);
console.log("Student Name:", student.name);


// 2. Create an Employee Object with 5 Properties

let employee1 = {
    id: 101,
    name: "Rahul",
    age: 25,
    department: "IT",
    salary: 30000
};

console.log("Employee Object:", employee1);


// 3. Add a New Property Dynamically

employee1.email = "rahul@gmail.com";

console.log("After Adding Email:", employee1);


// 4. Update an Existing Property

employee1.salary = 40000;

console.log("After Updating Salary:", employee);

// 5. Delete a Property

delete employee1.age;

console.log("After Deleting Age:", employee1);

// 6. Create an Array of Employee Objects

let employees = [
    {
        id: 101,
        name: "Rahul",
        department: "IT",
        salary: 30000
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 35000
    },
    {
        id: 103,
        name: "Kiran",
        department: "Developer",
        salary: 40000
    }
];

console.log("Employee List:", employees);

// Display All Employees

employees.forEach(function(emp) {
    console.log(
        emp.id,
        emp.name,
        emp.department,
        emp.salary
    );
});

// string methods 

// Original String
let str = "JavaScript is a programming language";

console.log("Original String:", str);


// 1. Reverse a String

let reversed = str.split("").reverse().join("");

console.log("Reversed String:", reversed);


// 2. Check Whether a String is a Palindrome

let palindrome = "madam";

let reversePalindrome = palindrome.split("").reverse().join("");

if (palindrome === reversePalindrome) {
    console.log(palindrome, "is a Palindrome");
} else {
    console.log(palindrome, "is Not a Palindrome");
}


// 3. Count Vowels in a String

let text = "JavaScript";
let count = 0;

for (let char of text.toLowerCase()) {
    if ("aeiou".includes(char)) {
        count++;
    }
}

console.log("Vowel Count:", count);


// 4. Count Words in a Sentence

let sentence = "JavaScript is easy to learn";

let words = sentence.trim().split(/\s+/);

console.log("Word Count:", words.length);


// 5. Find the Frequency of a Character

let word = "programming";
let character = "m";
let frequency = 0;

for (let char of word) {
    if (char === character) {
        frequency++;
    }
}

console.log("Character:", character);
console.log("Frequency:", frequency);