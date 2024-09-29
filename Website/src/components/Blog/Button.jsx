import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name}) => {
  return (
    <Link to={`${name}`}>
    <div  className='hover:text-red-700 font-bold cursor-pointer'>{name}</div>
    </Link> 
  )
}

export default Button