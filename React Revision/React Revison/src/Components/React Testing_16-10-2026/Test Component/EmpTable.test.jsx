import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import EmpTable from '../Components/EmpTable'

describe('EmployeeTable Component', () => {
  it('displays employee records', () => {
    const employees = [
      { id: 1, name: 'Chandra', role: 'Developer' },
      { id: 2, name: 'Ravi', role: 'Tester' }
    ]

    render(<EmpTable employees={employees} />)

    expect(screen.getByText('Chandra'))
      .toBeInTheDocument()

    expect(screen.getByText('Ravi'))
      .toBeInTheDocument()

    expect(screen.getByText('Developer'))
      .toBeInTheDocument()
  })
})