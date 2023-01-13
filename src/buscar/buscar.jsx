import React from 'react'
import "./buscar.css"
const Buscar = () => {
  return (
    <div className='buscar-div'>
       <input id='input-buscar' type="text" placeholder='BUSCAR PELICULA'/>
       <button className='buscar-boton'> BUSCAR </button>
    </div>
  )
}

export default Buscar