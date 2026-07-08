import UserCard from "./usercard";

function Content() {
  const students = [
    { id: 1, name: "chandra", course: "React" },
    { id: 2, name: "sekhar", course: "JavaScript" },
    { id: 3, name: "chandu", course: "HTML & CSS" }
  ];

  return (
    <main>
      <h2>Student List</h2>

      {students.map((student) => (
        <UserCard
          key={student.id}
          name={student.name}
          course={student.course}
        />
      ))}
    </main>
  );
}

export default Content;