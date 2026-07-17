import Navbar from "../../components_13-07-2026/MiniProject_17-07-2026/EmpComponents/Navbar";
import Home from "../../components_13-07-2026/MiniProject_17-07-2026/Home/Home";
import AddEmp from "../../components_13-07-2026/MiniProject_17-07-2026/EmpPages/AddEmp";
import DashboardPage from "../../components_13-07-2026/MiniProject_17-07-2026/EmpPages/DashboardPage";
import Emps from "../../components_13-07-2026/MiniProject_17-07-2026/EmpPages/Emps";
import Profile from "../../components_13-07-2026/MiniProject_17-07-2026/EmpPages/Profile";
function App (){

    return (
        
        <div>
            <h1>Emp Potral</h1>
            <Navbar/>
            <AddEmp/>
            <DashboardPage/>
            <Emps/>
            <Profile/>
        </div>
    )
}
export default App;
 