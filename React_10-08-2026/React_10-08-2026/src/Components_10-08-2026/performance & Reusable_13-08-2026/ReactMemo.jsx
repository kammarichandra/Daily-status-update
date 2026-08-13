import React, { useState } from 'react'
import MemoChild from './MemoChild';

function ReactMemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>React.memo()</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <MemoChild name="chandra" />
    </div>
  )
}

export default ReactMemo