import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import EmpList from '../Components/EmpList'


afterEach(() => {
  vi.unstubAllGlobals()
})

describe('EmployeeList Component', () => {

  // Test 1: Loading message
  it('displays loading message while API is pending', () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => new Promise(() => {}))
    )

    render(<EmpList />)

    expect(screen.getByText('Loading employees...'))
      .toBeInTheDocument()
  })

  // Test 2: Successful API response
  it('displays employee names when API succeeds', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve([
          { id: 1, name: 'Chandra' },
          { id: 2, name: 'Ravi' }
        ])
      })
    )

    render(<EmpList />)

    expect(await screen.findByText('Chandra'))
      .toBeInTheDocument()

    expect(screen.getByText('Ravi'))
      .toBeInTheDocument()
  })

  // Test 3: API failure
  it('displays error message when API fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new Error('Network error'))
    )

    render(<EmpList />)

    expect(await screen.findByRole('alert'))
      .toHaveTextContent('Unable to load employees')
  })

  // Test 4: Empty employee list
  it('displays empty message when no employees exist', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve([])
      })
    )

    render(<EmpList />)

    expect(await screen.findByText('No employees found'))
      .toBeInTheDocument()
  })

})