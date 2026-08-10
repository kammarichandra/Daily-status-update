const createStudentCard = (student) => {
  return `
    <div class="student-card">

      <div class="student-info">

        <div class="avatar">
          ${student.name.charAt(0)}
        </div>

        <div>
          <h3>${student.name}</h3>

          <p>${student.course}</p>
        </div>

      </div>

      <div class="student-details">

        <span>
          ${student.year}
        </span>

        <span class="attendance">
          ${student.attendance}% Attendance
        </span>

      </div>

    </div>
  `;
};

export default createStudentCard;