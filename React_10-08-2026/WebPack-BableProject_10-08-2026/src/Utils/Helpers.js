export let calculateAverageAttendance = (students) => {
    
  if (students.length === 0) {
    return 0;
  }

  let total = students.reduce(
    (sum, student) => sum + student.attendance,
    0
  );

  return Math.round(total / students.length);
};


export let calculateTotalCourses = (students) => {
  return students.length * 2;
};