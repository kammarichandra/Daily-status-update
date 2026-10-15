import AddEmModal from "../Components/AddEmModal";
import Table from "../Components/Table";

const employees = [
  {
    id: 101,
    name: "Ravi Kumar",
    role: "Developer",
    status: "Active",
  },
  {
    id: 102,
    name: "Priya Sharma",
    role: "HR Manager",
    status: "Active",
  },
  {
    id: 103,
    name: "Arun Reddy",
    role: "Tester",
    status: "On Leave",
  },
];

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Employee Name" },
  { key: "role", label: "Role" },
  {
    key: "status",
    label: "Status",
    render: (employee) => (
      <span
        className={
          employee.status === "Active"
            ? "status-active"
            : "status-leave"
        }
      >
        {employee.status}
      </span>
    ),
  },
];

function EmpPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Employee Management</h1>
        <AddEmModal />
      </div>

      <Table
        columns={columns}
        data={employees}
        getRowKey={(employee) => employee.id}
        emptyMessage="No employees available"
      />
    </main>
  );
}

export default EmpPage;
