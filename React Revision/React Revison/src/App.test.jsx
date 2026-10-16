import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from './Components/React Testing_16-10-2026/Test Component/Button'

describe('App Component', () => {
  it('displays the heading', () => {
    render(<Button />)

    expect(
      screen.getByText('Employee Management Portal')
    ).toBeInTheDocument()
  })

  it('displays the Login button', () => {
    render(<Button />)

    expect(
      screen.getByRole('button', { name: 'Login' })
    ).toBeInTheDocument()
  })
})