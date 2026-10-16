import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import EmpCard from '../Components/EmpCard'

describe('EmployeeCard Component', () => {
  it('displays the employee name', () => {
    render(
      <EmpCard
        employee={{
          id: 1,
          name: 'Chandra',
          role: 'Developer'
        }}
      />
    )

    expect(screen.getByText('Chandra'))
      .toBeInTheDocument()
  })
})