import Table from "../../../Reusable Components_15-10-2026/Components/Table";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
];

export default function EmpList({ employees }) {
  return (
    <Table
      columns={columns}
      data={employees}
      getRowKey={(employee) => employee.id}
      emptyMessage="No employees found"
    />
  );
}