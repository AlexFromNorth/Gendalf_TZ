import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)


  return (
    <>

      <div className="card">
        <button onClick={()=>{setCount(count +1)}}>set {count}</button>
      </div>

    </>
  )
}

export default App
