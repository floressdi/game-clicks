// import React, { useState } from 'react';
import React from 'react';
import '../App.css';

function BtnClic(prop) {

  const {counter, handleChange, text} = prop

  return (
    <div>
        <button className='btnclic btn'
          onClick={handleChange}
          value ={counter}
         >
          <p>{text}</p>
        </button>
    </div>
  )
}export default BtnClic;