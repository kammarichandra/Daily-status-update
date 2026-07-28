import Student from "./Student";
import withAuth from "./withAuth";

let ProtectedStudent = withAuth(Student);

function StudentDashboaed() {

  return (
    <>
      <ProtectedStudent />
    </>
  );
  
}

export default StudentDashboaed;