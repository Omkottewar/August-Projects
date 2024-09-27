import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Body from './Body'
import ColorContext from './context/ColorContext'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)


  return (
    <ColorContext.Provider value={{color,  setColor}}>
<div className="m-auto  ">
  <Body/>
  </div>
    </ColorContext.Provider>

  )
}

export default App
