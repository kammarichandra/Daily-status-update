import { useEffect, useState } from 'react'

function EmpList() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/employees')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load employees')
        }

        return response.json()
      })
      .then(setEmployees)
      .catch(() => setError('Unable to load employees'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading employees...</p>
  if (error) return <p role="alert">{error}</p>
  if (employees.length === 0) return <p>No employees found</p>

  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>{employee.name}</li>
      ))}
    </ul>
  )
}

export default EmpList