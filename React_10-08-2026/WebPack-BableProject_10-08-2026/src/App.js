import "./styles.css";

import createHeader from "./components/header";
import createStudentCard from "./components/card";
import createFooter from "./components/footer";

import students from "./data/students";

import { calculateAverageAttendance, calculateTotalCourses } from "./utils/helpers";


let averageAttendance = calculateAverageAttendance(students);

let totalCourses = calculateTotalCourses(students);

let studentCards = students .map((student) => createStudentCard(student)).join("");

let app = document.getElementById("app");


app.innerHTML = `

  ${createHeader()}

  <main class="container">

    <section class="welcome">

      <div>
        <span class="badge">
          Dashboard
        </span>

        <h2>
          Welcome back, Student!
        </h2>

        <p>
          Here is your current academic overview.
        </p>
      </div>

    </section>


    <section class="stats">

      <div class="stat-card">

        <div class="stat-icon blue">
          👨‍🎓
        </div>

        <div>
          <p>Total Students</p>
          <h3>${students.length}</h3>
        </div>

      </div>


      <div class="stat-card">

        <div class="stat-icon green">
          📚
        </div>

        <div>
          <p>Total Courses</p>
          <h3>${totalCourses}</h3>
        </div>

      </div>


      <div class="stat-card">

        <div class="stat-icon purple">
          📊
        </div>

        <div>
          <p>Average Attendance</p>
          <h3>${averageAttendance}%</h3>
        </div>

      </div>

    </section>


    <section class="students-section">

      <div class="section-header">

        <div>
          <h2>Students</h2>

          <p>
            Current students in the system
          </p>
        </div>

        <span class="student-count">
          ${students.length} Students
        </span>

      </div>


      <div class="students-list">

        ${studentCards}

      </div>

    </section>

  </main>


  ${createFooter()}

`;