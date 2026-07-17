import AddEmp from "../EmpPages/AddEmp";
import Dashboard from "../EmpPages/DashboardPage";
import Emps from "../EmpPages/Emps";
import Profile from "../EmpPages/Profile";

function Home() {
  return (
    <div>
      <Dashboard />
      <AddEmp />
      <Emps />
      <Profile />
    </div>
  );
}

export default Home;