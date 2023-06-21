import React, { useState } from 'react'
import Game from './Game';
import '../App.css';

export default function Inicio() {
  const[start, setStart]=useState(false); //Manejamos el estado de inicio del juego 
  const clicks = ()=>{
        setStart(true)
  }

  return (
    <section className='inicio flexbox'>
     <div className={`menuinicio ${start ? "activate": ""}`}> {/*asignamos una clase cuando se inicie el juego*/}
        <h3>¿Cuántos clics puedes hacer en 30 segundos?</h3>
        <button className='btn_start flexbox' onClick={clicks}>
          <p>jugar!</p>
        </button>
     </div>
      <div>
      {/* //si se inicio el juego renderizamos el juego en pantalla */}
          {start && <Game />}  
     </div>
    </section>
  )
}
