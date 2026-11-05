
// STUDENT DATA ANALYTICS APPLICATION

// 1. Student Dataset

const students = [
    {
        id: 101,
        name: "Chandra",
        department: "Robotics",
        marks: [85, 90, 78, 92, 88]
    },
    {
        id: 102,
        name: "Rahul",
        department: "Computer Science",
        marks: [65, 70, 75, 80, 60]
    },
    {
        id: 103,
        name: "Priya",
        department: "Electronics",
        marks: [95, 92, 98, 90, 96]
    },
    {
        id: 104,
        name: "Arjun",
        department: "Robotics",
        marks: [35, 45, 30, 50, 40]
    },
    {
        id: 105,
        name: "Sneha",
        department: "Computer Science",
        marks: [88, 85, 91, 87, 90]
    },
    {
        id: 106,
        name: "Kiran",
        department: "Electronics",
        marks: [55, 60, 65, 58, 62]
    },
    {
        id: 107,
        name: "Divya",
        department: "Robotics",
        marks: [92, 95, 89, 94, 96]
    },
    {
        id: 108,
        name: "Vijay",
        department: "Computer Science",
        marks: [30, 25, 35, 40, 32]
    },
    {
        id: 109,
        name: "Anjali",
        department: "Electronics",
        marks: [75, 80, 85, 78, 82]
    },
    {
        id: 110,
        name: "Manoj",
        department: "Robotics",
        marks: [68, 72, 65, 70, 75]
    }
];


// 2. Calculate Total and Average Marks

const studentResults = students.map(student => {

    const total = student.marks.reduce(
        (sum, mark) => sum + mark, 0
    );

    const average = total / student.marks.length;

    return {
        ...student,
        total,
        average: Number(average.toFixed(2)),
        result: student.marks.every(mark => mark >= 40)
            ? "Pass"
            : "Fail"
    };

});

console.log("STUDENT RESULTS:");
console.log(studentResults);


// 3. Display Student Names using map()

const studentNames = students.map(student => student.name);

console.log("STUDENT NAMES:");
console.log(studentNames);


// 4. Filter Passed Students

const passedStudents = studentResults.filter(
    student => student.result === "Pass"
);

console.log("PASSED STUDENTS:");
console.log(passedStudents);


// 5. Filter Failed Students

const failedStudents = studentResults.filter(
    student => student.result === "Fail"
);

console.log("FAILED STUDENTS:");
console.log(failedStudents);


// 6. Identify Top Performers

const topPerformers = [...studentResults]
    .sort((a, b) => b.average - a.average)
    .slice(0, 3);

console.log("TOP 3 PERFORMERS:");
console.log(topPerformers);


// 7. Find Student by ID

const searchStudent = studentResults.find(
    student => student.id === 105
);

console.log("SEARCH STUDENT:");
console.log(searchStudent);


// 8. Check Distinction Students

const hasDistinction = studentResults.some(
    student => student.average >= 90
);

console.log("ANY STUDENT WITH 90+ AVERAGE?");
console.log(hasDistinction);


// 9. Check Whether All Students Passed

const allPassed = studentResults.every(
    student => student.result === "Pass"
);

console.log("ALL STUDENTS PASSED?");
console.log(allPassed);


// 10. Calculate Overall Class Average

const totalClassMarks = studentResults.reduce(
    (sum, student) => sum + student.total, 0
);

const totalSubjects = students.reduce(
    (sum, student) => sum + student.marks.length, 0
);

const classAverage = totalClassMarks / totalSubjects;

console.log("CLASS AVERAGE:");
console.log(classAverage.toFixed(2));


// 11. Extract All Subjects using flatMap()

const studentsWithSubjects = [
    { name: "Chandra", subjects: ["Java", "React", "MySQL"] },
    { name: "Rahul", subjects: ["Python", "Java", "HTML"] },
    { name: "Priya", subjects: ["React", "CSS", "MySQL"] }
];

const allSubjects = studentsWithSubjects.flatMap(
    student => student.subjects
);

console.log("ALL SUBJECTS:");
console.log(allSubjects);


// 12. Remove Duplicate Subjects using Set

const uniqueSubjects = [...new Set(allSubjects)];

console.log("\nUNIQUE SUBJECTS:");
console.log(uniqueSubjects);


// 13. Generate Summary Report

const summaryReport = {
    totalStudents: students.length,
    passedStudents: passedStudents.length,
    failedStudents: failedStudents.length,
    classAverage: Number(classAverage.toFixed(2)),
    highestAverage: topPerformers[0].average,
    lowestAverage: Math.min(
        ...studentResults.map(student => student.average)
    ),
    distinctionCount: studentResults.filter(
        student => student.average >= 90
    ).length,
    passPercentage: Number(
        (passedStudents.length / students.length * 100).toFixed(2)
    )
};

console.log("STUDENT ANALYTICS SUMMARY:");
console.log(summaryReport);
