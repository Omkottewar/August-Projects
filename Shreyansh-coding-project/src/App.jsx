import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Nav from './Nav'
import Home from './Home'

function App() {

  return (
<div className="h-screen w-screen flex">
 <Nav/>
 <Home/>
  
</div>
  )
}
export default App;