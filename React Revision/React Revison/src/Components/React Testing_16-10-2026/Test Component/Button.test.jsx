import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from '../Components/Button'


describe('Button Component', () => {
  it('displays the correct button text', () => {
    render(<Button text="Add Employee" />)

    expect(
      screen.getByRole('button', {
        name: 'Add Employee'
      })
    ).toBeInTheDocument()
  })
})