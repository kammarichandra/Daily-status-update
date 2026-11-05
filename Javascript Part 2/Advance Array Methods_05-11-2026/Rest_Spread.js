

// 1. REST OPERATOR - Unlimited Numbers

function calculateSum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", calculateSum(10, 20, 30));
console.log("Sum:", calculateSum(10, 20, 30, 40, 50));

// 2. SPREAD - Merge Two Employee Objects

const employee1 = {
    id: 101,
    name: "Chandra",
    department: "IT"
};

const employee2 = {
    salary: 45000,
    experience: "2 Years",
    location: "Hyderabad"
};

const mergedEmployee = {
    ...employee1,
    ...employee2
};

console.log("Merged Employee:");
console.log(mergedEmployee);


// 3. SPREAD - Merge Two Arrays

const frontendSkills = ["HTML", "CSS", "JavaScript"];

const backendSkills = ["Java", "Spring Boot", "MySQL"];

const allSkills = [...frontendSkills, ...backendSkills];

console.log("Merged Skills:");
console.log(allSkills);


// 4. SPREAD - Copy an Array

const originalNumbers = [10, 20, 30];

const copiedNumbers = [...originalNumbers];

copiedNumbers.push(40);

console.log("Original Array:", originalNumbers);
console.log("Copied Array:", copiedNumbers);

// Map & set

// 1. MAP - Student Management

const students = new Map();

// ADD STUDENTS
students.set(101, "Chandra");
students.set(102, "Rahul");
students.set(103, "Priya");
students.set(104, "Arjun");

console.log("All Students:");
console.log(students);


// RETRIEVE STUDENT
console.log("Student with ID 102:");
console.log(students.get(102));


// UPDATE STUDENT
students.set(102, "Rahul Kumar");

console.log("After Updating:");
console.log(students.get(102));

// DELETE STUDENT
students.delete(103);

console.log("After Deleting ID 103:");
console.log(students);


// CHECK STUDENT EXISTS
console.log("Student ID 101 Exists?");
console.log(students.has(101));

// TOTAL STUDENTS
console.log("\nTotal Students:");
console.log(students.size);

// ITERATE MAP
console.log("\nStudent Records:");

for (const [id, name] of students) {
    console.log(`ID: ${id}, Name: ${name}`);
}

// 2. SET - Remove Duplicate Names

const studentNames = [
    "Chandra",
    "Rahul",
    "Priya",
    "Chandra",
    "Arjun",
    "Rahul",
    "Sneha"
];

const uniqueNames = new Set(studentNames);

console.log("Unique Student Names:");
console.log([...uniqueNames]);


// ADD AND DELETE SET VALUES
uniqueNames.add("Kiran");
uniqueNames.delete("Priya");

console.log("Updated Unique Names:");
console.log([...uniqueNames]);

// CHECK VALUE
console.log("Is Chandra Available?");
console.log(uniqueNames.has("Chandra"));

// week Map

const studentDetails = new WeakMap();

let student = {
    id: 101,
    name: "Chandra"
};

// Add student details
studentDetails.set(student, {
    marks: 90,
    grade: "A"
});

// Retrieve details
console.log(studentDetails.get(student));

// Check student
console.log(studentDetails.has(student));

// Delete student details
studentDetails.delete(student);

console.log(studentDetails.has(student));


// WeakSet 

const registeredStudents = new WeakSet();

const student1 = {
    id: 101,
    name: "Chandra"
};

const student2 = {
    id: 102,
    name: "Rahul"
};

// Add students
registeredStudents.add(student1);
registeredStudents.add(student2);

// Check students
console.log(registeredStudents.has(student1));
console.log(registeredStudents.has(student2));

// Delete student
registeredStudents.delete(student1);

console.log(registeredStudents.has(student1));

// itterators and generators 

