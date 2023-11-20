import React, { useState } from "react";
import logoinicio from "../img/ClickCounterLogo.png";
import Game from "./Game";
import "../App.css";

export default function Inicio() {



  const [start, setStart] = useState(false); //Manejamos el estado de inicio del juego
  const clicks = () => {
    setStart(true);
  };

  return (
    <section className="inicio flexbox">
      {/* asignamos una clase cuando se inicie el juego */}
      <div className={`menuinicio ${start ? "activate " : ""}`}>
        <img className="logorounded" width={200} src={logoinicio} />
        <h3>Este juego tiene reglas muy simples</h3>
        <div className="reglas-container">
          <ul>
            <p className="flexbox">
              <span className="txt-steps">1</span>Revienta el boton en forma
              redonda!
            </p>
          </ul>
          <ul>
            <p className="flexbox">
              <span className="txt-steps">2</span>Revienta el boton en forma
              redonda!!
            </p>
          </ul>
          <ul>
            <p className="flexbox">
              <span className="txt-steps">3</span>Revienta el boton en forma
              redonda!!!
            </p>
          </ul>
        </div>
        {/* <form className="form"> */}
          {/* <label>Información</label>  */}
          {/* <input className="input-name" type="text" id="inputname" ></input> */}
        {/* </form> */}
        <button className="btnyellow flexbox" onClick={clicks}>
          <p>Estoy listo!!</p>
        </button>
      </div>
        {/* //si se inicio el juego renderizamos el juego en pantalla */}
        {start && <Game />}
        {/* <Game/> */}
    </section>
  );
}
