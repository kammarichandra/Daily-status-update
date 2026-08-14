import { Link, useParams } from "react-router-dom";

function CourseDetails() {
  let { courseId } = useParams();

  let courses = {
    react: {
      name: "React JS",
      duration: "3 Months",
      instructor: "John",
      fee: "₹10,000",
    },

    javascript: {
      name: "JavaScript",
      duration: "2 Months",
      instructor: "David",
      fee: "₹8,000",
    },

    python: {
      name: "Python",
      duration: "4 Months",
      instructor: "Sarah",
      fee: "₹12,000",
    },
  };

  let course = courses[courseId];

  if (!course) {
    return (
      <div style={{ padding: "30px" }}>
        <h1>Course Not Found </h1>

        <p>Course ID: {courseId}</p>

        <Link to="/">Go Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>📚 Course Details</h1>

      <hr />

      <p> <strong>Course:</strong> {course.name} </p>

      <p> <strong>Duration:</strong> {course.duration} </p>

      <p> <strong>Instructor:</strong> {course.instructor} </p>

      <p> <strong>Fee:</strong> {course.fee} </p>

      <Link to="/dashboard">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default CourseDetails;