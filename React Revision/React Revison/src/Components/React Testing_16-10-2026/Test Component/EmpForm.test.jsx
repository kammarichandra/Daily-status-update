import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'

import EmpForm from '../Components/EmpForm'

it('shows validation error for empty name', async () => {
  const user = userEvent.setup()

  render(<EmpForm />)

  await user.click(
    screen.getByRole('button', { name: 'Add Employee' })
  )

  expect(screen.getByRole('alert'))
    .toHaveTextContent('Name is required')
})

it('allows the user to enter a name', async () => {
  const user = userEvent.setup()

  render(<EmpForm />)

  await user.type(
    screen.getByLabelText('Employee Name'),
    'Rahul'
  )

  expect(screen.getByLabelText('Employee Name'))
    .toHaveValue('Rahul')
})