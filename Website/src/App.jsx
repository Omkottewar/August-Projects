import { useState } from 'react'
import './index.css'
import Profile from './components/Profile/Profile'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Blog from './components/Blog/Blog'
import Projects from './components/ProjectsPersonal/Projects'
import Dsa from './components/DSA/Dsa'
import Home from './components/Home/Home'
import Weather from './components/ProjectsPersonal/WeatherApp/Weather'

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
      <Route path='/projects/weather' element={<Weather/>} ></Route>
      <Route path='/dsa' element={<Dsa/>} ></Route>
      <Route path='/' element={<Home/>} ></Route>
    </Routes>
    </BrowserRouter>
   
  </div>
  )
}

export default App
