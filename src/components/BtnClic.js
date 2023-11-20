// import React, { useState } from 'react';
import React from 'react';
import logoclic from "../img/ClickCounterLogo.png"
import '../App.css';

function BtnClic(prop) {

  const {counter, handleChange} = prop

  return (
    <>
          <button className=' btnclic logorounded'
            onClick={handleChange}
            value ={counter}
          >
            <img 
                className='logorounded'
                width={200}
                src={logoclic}
            />
        </button>
    </>
  )
}export default BtnClic;