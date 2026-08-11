import React from 'react'

function ErrorMsg({ message, onRetry }) {
  return (
    <div className="error">
        
      <h2> Something went wrong</h2>

      <p>{message}</p>

      <button onClick={onRetry}> Try Again </button>

    </div>
  )
}

export default ErrorMsg