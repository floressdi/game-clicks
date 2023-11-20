import React from "react";
import BtnDelete from "./BtnDelete";
import ImgResut from "./ImgResut";
import "./styles/results.css";

export default function Results(props) {
  let media = props.clicks / 10;

  function dosDecimales(n) {
    //Trunca los numeros a 2 decimales
    let t = n.toString();
    let regex = /(\d*.\d{0,2})/;
    return t.match(regex)[0];
  }

  let tiempo;
  let leyenda;
  let imagen;
  let ico;

  if (props.clicks >= 85) {
    tiempo = "¡Que Velocidad!";
    ico="⚡"
    leyenda = "Eres pariente del Rayo McQueen ?";
    imagen = "rayo";
  } else if (props.clicks >= 75) {
    tiempo = "¡Velocidad!";
    leyenda = "Eres demasiado pro para este juego!!";
    imagen = "quepro";
  } else if (props.clicks >= 50) {
    tiempo = "Tortuga!";
    ico="🐢"
    leyenda = "Hasta la tortuga es mas rapida que tu y lo sabes!";
    imagen = "tortugas";
  } else if (props.clicks >= 25){
    tiempo= "Lento!!"
    ico = ""
    leyenda = "El trabajo es sagrado no lo toques"
    imagen = "perezoso"
  } else {
    tiempo = "CARACOL";
    ico = "🐌"
    leyenda = "¿porque los italianos comen caracoles? por que odian la comida rapida";
    imagen = "caracol";
  }

  return (
    <section className="section-results flexbox">
      <div className="sect">
        <h3>{tiempo} {ico}</h3>
        <div className="flexbox flexdirection">
          <div className="container__resultadosp">
            <p>
              Tu <span>velocidad</span> de click es de
            </p>
            <p>
              <span className="txt-yellow">{dosDecimales(media)} CPS</span> 
            </p>
            <p>
              <span>{props.clicks}</span> Clicks en <span>10 segundos!</span>
            </p>
          </div>
          <p className="leyenda">{leyenda}</p>
          <ImgResut imagen={imagen} />
          <div className="containerBtns">
            <BtnDelete text="Intentar otra vez " />
          </div>
        </div>
      </div>
    </section>
  );
}
