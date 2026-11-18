// Student Registration
        let name = prompt("Enter Student Name:");
        let rollNo = prompt("Enter Roll Number:");

        // Enter Marks
        let mark1 = Number(prompt("Enter Subject 1 Marks:"));
        let mark2 = Number(prompt("Enter Subject 2 Marks:"));
        let mark3 = Number(prompt("Enter Subject 3 Marks:"));

        // Calculate Total and Average
        let total = mark1 + mark2 + mark3;
        let average = total / 3;

        // Generate Grade
        let grade;

        if (average >= 90) {
            grade = "A";
        } else if (average >= 75) {
            grade = "B";
        } else if (average >= 60) {
            grade = "C";
        } else if (average >= 35) {
            grade = "D";
        } else {
            grade = "Fail";
        }

        // Display Student Record
        document.write("<h3>Student Details</h3>");
        document.write("Name: " + name + "<br>");
        document.write("Roll Number: " + rollNo + "<br>");
        document.write("Subject 1: " + mark1 + "<br>");
        document.write("Subject 2: " + mark2 + "<br>");
        document.write("Subject 3: " + mark3 + "<br>");
        document.write("Total Marks: " + total + "<br>");
        document.write("Average: " + average.toFixed(2) + "<br>");
        document.write("Grade: " + grade);