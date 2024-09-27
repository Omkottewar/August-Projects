import React from 'react'

const ColorComponents = ({heading}) => {
  return (
    <div className='text-center'>
        <h2>{heading}</h2>
        <input className='w-52' type="color" />
    </div>
  )
}

export default ColorComponents