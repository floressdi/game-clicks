import React from "react";
import BtnDelete from "./BtnDelete";
import ImgResut from "./ImgResut";
import "./styles/results.css";

export default function Results(props) {
  let media = props.clicks / 30;

  function dosDecimales(n){ //Trunca los numeros a 2 decimales
    let t =n.toString();
    let regex=/(\d*.\d{0,2})/;
    return t.match(regex)[0];
  }

  let tiempo;
  let leyenda;
  let imagen;
  let ico;

  if (props.clicks >= 300) {
    tiempo = "velocidad";
    leyenda = "Eres pariente del Rayo McQueen ?";
    imagen = "rayo";
  }
  else if(props.clicks >= 200) {
    tiempo = "velocidad";
    leyenda = "Eres demasiado pro para este juego!!";
    imagen = "quepro";
  }
  else if(props.clicks >= 100) {
    tiempo = "tortuga";
    leyenda = "Hasta la tortuga es mas rapida que tu y lo sabes!";
    imagen = "tortugas";
  } else {
    tiempo = "pereza";
    leyenda = "Un perezoso viendo a otro perezoso!";
    imagen = "perezoso";
  }

  return (
    <section className="sect">
      <h3>Resultados</h3>
      <div className="flexbox flexdirection">
        <div className="container__resultadosp">
          <p>
            Hiciste <span>{props.clicks} </span> Clicks en{" "}
            <span>30 segundos!</span>
          </p>
          <p>
            Tu <span>{tiempo}</span> de click es <span>{dosDecimales(media)}</span> CPS
          </p>
        </div>
        <p className="leyenda">{leyenda}</p>
        <ImgResut imagen={imagen} />
        <div className="containerBtns">
        <BtnDelete text="Intentar otra vez " />
      </div>
      </div>

      
    </section>
  );
}
