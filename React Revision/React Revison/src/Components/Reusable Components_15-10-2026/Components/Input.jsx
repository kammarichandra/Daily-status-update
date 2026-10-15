import React from 'react'

function Input({label, name, type = "text", placeholder = "", value, defaultValue, onChange, required = false, error = "",}) {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}

      <input id={name} name={name} type={type} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange} required={required} className="form-input" aria-invalid={Boolean(error)} />

      {error && <p className="error-text">{error}</p>}
    </div>
  )
}

export default Input