import React, { useContext } from 'react'
import ColorContext from '../../Context/ColorContext'
import ColorButton from '../../ColorButton'

const Home = () => {

  const {color,setColor} = useContext(ColorContext)


  return (
    <div>
      <div className="">
      <ColorButton/>
      </div>
    </div>
  )
}

export default Home