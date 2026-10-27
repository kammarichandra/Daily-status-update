
const students = [];

const totalSubjects = 5;
const maxMarks = 100;
const passMarks = 35;

// Function to determine grade
function calculateGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 35) {
        return "D";
    } else {
        return "F";
    }
}

// Function to calculate student results
function calculateResult(student) {
    let total = 0;
    let passed = true;

    for (let i = 0; i < student.marks.length; i++) {
        total += student.marks[i];

        if (student.marks[i] < passMarks) {
            passed = false;
        }
    }

    const percentage = total / totalSubjects;

    // A student must pass every subject
    // to receive an overall PASS.
    const status = passed ? "PASS" : "FAIL";

    const grade = passed
        ? calculateGrade(percentage)
        : "F";

    return {
        total: total,
        percentage: percentage,
        grade: grade,
        status: status
    };
}

// Function to display student result
function displayResult(student) {
    const result = calculateResult(student);

    console.log("\n------------------------------");
    console.log("Student Result");
    console.log("------------------------------");
    console.log("Name:", student.name);
    console.log("Roll Number:", student.rollNumber);
    console.log("Marks:", student.marks.join(", "));
    console.log("Total Marks:", result.total,
        "/", totalSubjects * maxMarks);
    console.log("Percentage:", result.percentage.toFixed(2) + "%");
    console.log("Grade:", result.grade);
    console.log("Status:", result.status);
}

// Add student details
function addStudent(name, rollNumber, marks) {
    if ( !name.trim() || !rollNumber.trim() || marks.length !== totalSubjects ||
     marks.some(mark => !Number.isFinite(mark) ||
            mark < 0 ||
            mark > maxMarks
        )
    ) {
        console.log("Invalid student details or marks.");
        return;
    }

    const student = {
        name: name,
        rollNumber: rollNumber,
        marks: marks
    };

    students.push(student);
}

// Sample student data

addStudent("Ravi", "101", [85, 90, 78, 88, 92]);
addStudent("Sita", "102", [65, 72, 68, 75, 80]);
addStudent("Kiran", "103", [90, 25, 85, 70, 60]);
addStudent("Priya", "104", [95, 92, 98, 96, 94]);

// Display all student results

for (let i = 0; i < students.length; i++) {
    displayResult(students[i]);
}
