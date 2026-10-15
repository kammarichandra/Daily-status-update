import React, { useState } from 'react'
import Modal from './Modal';
import Input from './Input';
import Button from './Button';
import EmpSearch from './EmpSearch';
 

function AddEmModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        alert(`Employee: ${name}, Role: ${role}`);
        setName("");
        setRole("");
        setIsOpen(false);
    }
    return (
        <>
      <Button onClick={() => setIsOpen(true)}> Add Employee </Button>
        <EmpSearch/>
      <Modal
        isOpen={isOpen}
        title="Add New Employee"
        onClose={() => setIsOpen(false)}
        footer={
          <Button variant="secondary" onClick={() => setIsOpen(false)} >
            Cancel
          </Button>
        }
      >
        <form onSubmit={handleSubmit}>
          <Input
            label="Employee Name"
            name="employeeName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            label="Job Role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />

          <Button type="submit">Save Employee</Button>
        </form>
      </Modal>
    </>
    )
}

export default AddEmModal