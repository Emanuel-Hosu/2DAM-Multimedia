import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-4xl font-bold text-center text-blue-500'>Welcome to My Beautiful App!</h1>
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR updates.
        </p>
      </div>
    </>
  )
}

export default App
