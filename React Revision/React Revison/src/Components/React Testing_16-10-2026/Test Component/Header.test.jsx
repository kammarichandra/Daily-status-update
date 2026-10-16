import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../Components/Header'

describe('Header Component', () => {
  it('displays the application logo', () => {
    render(<Header />)

    expect(screen.getByText('Teamsync'))
      .toBeInTheDocument()
  })
})