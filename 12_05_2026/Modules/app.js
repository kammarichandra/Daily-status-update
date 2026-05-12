
import { students, addstudent } from "./students.js";
import { getGrade } from "./result.js";

let addbtn = document.getElementById("addbtn");
let showbtn = document.getElementById("showbtn");
let output = document.getElementById("output");

//add student 

addbtn.addEventListener("click",()=>{
    let name = document.getElementById("name").value.trim();
    let marksValue = document.getElementById("marks").value.trim();
    let marks = Number(marksValue);

    if(name === "" || marksValue === "" || Number.isNaN(marks)){
        alert("please enter the details");
        return;
    }
    addstudent(name,marks);
    alert("student added");

    document.getElementById("name").value="";
    document.getElementById("marks").value="";
});

//show result 

showbtn.addEventListener("click",()=>{
    output.innerHTML = `
    <table border="2">
        <thead>
            <tr >
                <th>Name</th>
                <th>Marks</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody id="results-body"></tbody>
    </table>`;

    let resultsBody = document.getElementById("results-body");
    students.forEach((student)=>{
        let grade = getGrade(student.marks);

        resultsBody.innerHTML +=
        `
            <tr> 
                <td>${student.name}</td>
                <td>${student.marks}</td>
                <td>${grade}</td>
            </tr>`;
    })
})