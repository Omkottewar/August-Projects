import { useState } from 'react'
import './index.css'
import Navbar from './Navbar/Navbar'
import Body from './Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col bg-current px-20">
      <Navbar/>
      <Body/>
    </div>
  )
}

export default App
