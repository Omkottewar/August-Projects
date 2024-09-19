import { useState } from 'react'
import './index.css'
import Profile from './Profile/Profile'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Blog from './Blog/Blog'
import Projects from './Projects/Projects'
import Dsa from './DSA/Dsa'
import Home from './Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="flex">
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/profile' element={<Profile/>} ></Route>
      <Route path='/blog' element={<Blog/>} ></Route>
      <Route path='/projects' element={<Projects/>} ></Route>
      <Route path='/dsa' element={<Dsa/>} ></Route>
      <Route path='/' element={<Home/>} ></Route>
    </Routes>
    </BrowserRouter>
   
  </div>
  )
}

export default App
