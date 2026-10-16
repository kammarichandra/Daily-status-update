import { useState } from 'react'

function EmpForm() {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!name.trim()) {
      setError('Name is required')
      return
    }

    setError('')
    alert(`Employee added: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Employee Name</label>

      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Add Employee</button>

      {error && <p role="alert">{error}</p>}
    </form>
  )
}

export default EmpForm