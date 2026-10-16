import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import EmpStatus from '../Components/EmpStatus'


it('shows Active when employee is active', () => {
  render(<EmpStatus active={true} />)

  expect(screen.getByText('Active')).toBeInTheDocument()
})

it('shows Inactive when employee is inactive', () => {
  render(<EmpStatus active={false} />)

  expect(screen.getByText('onLeave')).toBeInTheDocument()
})