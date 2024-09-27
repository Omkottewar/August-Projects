import React, { useContext } from 'react'
import ColorContext from './context/ColorContext'

const Button = ({property,name}) => {

    const {color,setColor } = useContext(ColorContext)

  return (
    <div onClick={()=>setColor(!color)} className={`rounded-md px-2 py-1 w-52 cursor-pointer ${property}`}>{name}</div>
  )
}

export default Button