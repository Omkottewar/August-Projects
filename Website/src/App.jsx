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
import ColorContext from './Context/ColorContext'

function App() {
  const [color, setColor] = useState(false)

  return (
  <div className={`flex ${color?"bg-[#191919] text-white":"bg-white"} h-full`} >
    <BrowserRouter>
    <ColorContext.Provider value={{color,setColor}}>
    <Navbar/>
    <Routes>
      <Route path='/profile' element={<Profile/>} ></Route>
      <Route path='/blog' element={<Blog/>} ></Route>
      <Route path='/projects' element={<Projects/>} ></Route>
      <Route path='/projects/weather' element={<Weather/>} ></Route>
      <Route path='/dsa' element={<Dsa/>} ></Route>
      <Route path='/' element={<Home/>} ></Route>
    </Routes>
    </ColorContext.Provider>
    </BrowserRouter>
   
  </div>
  )
}

export default App
