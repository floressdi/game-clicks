import React from 'react'
// import soundreset from '../sounds/metal-gear-solid.mp3'
import '../App.css';

export default function BtnDelete(prop) {

  // function play(){
  //   new Audio(soundreset).play()
  // }

  const resetGame = () =>{
    // play()
    window.location.reload(true)
  }

  return (
    <div>
        <button className='btnyellow btn'
            onClick={resetGame}
        >
            <p>{prop.text}</p>
        </button>
    </div>
  )
}