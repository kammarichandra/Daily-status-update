import React, { createContext, useState } from 'react'
import EmpList from '../../Components/Mini Project_15-10-2026/Feauters/EmpList';

const EmployeeContext = createContext()

function MiniProjectPage() {

    const [selectedEmployee, setSelectedEmployee] = useState(null);
  return (
    <div>
        <EmployeeContext.Provider  value={{ selectedEmployee, setSelectedEmployee }}>
            <EmpList/>
        </EmployeeContext.Provider>
    </div>
  )
}

export default MiniProjectPage