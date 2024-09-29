import React, { useContext } from 'react'
import ColorContext from './Context/ColorContext'

const ColorButton = () => {
    const {color,setColor} = useContext(ColorContext)

    return (
    <div><button onClick={()=>setColor(!color)} className={` font-semibold ${color?"bg-[#3f3e3e]  ":" text-black"} bg-[#191919] text-white px-2 py-1 rounded-md absolute`}>{color?"Dark Mode":"Light Mode"}</button></div>
  )
}

export default ColorButton