import React from 'react'
import '../App.css';

export default function BtnDelete(prop) {

  const resetGame = () =>{
    window.location.reload(true)
  }

  return (
    <div>
        <button className='btnDelete btn'
            onClick={resetGame}
        >
            <p>{prop.text}</p>
        </button>
    </div>
  )
}