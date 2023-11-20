import React from 'react'
// import logoclic from "../img/ClickCounterLogo.png"
import '../App.css';

export default function DisplayCounter(prop) {
  return (
    <div className='flexbox flexdirection'a>
      <div className='counterdisplay flexbox'>
          <p className='number' id=''> {prop.counter} </p>
      </div>
    </div>
  )
}