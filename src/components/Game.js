import React, { useRef, useEffect, useState } from "react";
import BtnClic from "./BtnClic";
import BtnDelete from "./BtnDelete";
import DisplayCounter from "./DisplayCounter";
import Results from "./Results";
import "../App.css";

export default function Game() {
  const [counter, setCounter] = useState(0);

  function handleChange(e) {//aumentamos contador de clicks
    setCounter(counter + 1);
  }

  function resetCounter(e) {
    setCounter(0);
  }

  const [timeMinutes, setTimeMinutes] = useState(0); //Iniciamos en un minuto
  const [timeSeconds, setTimeSeconds] = useState(30);

  let intervalRef = useRef();

  const timer = ()=> setTimeSeconds((prev)=>prev-1);//iremos restando de uno en uno

  useEffect(()=>{
    intervalRef.current = setInterval(timer, 1000); //lo hara de segundo por segundo 

    return() => clearInterval(intervalRef.current);
  }, []);


  let showResults = false;
  if(timeSeconds === 0){ // con esto deteneremos la cuenta regresiva mostrada en pantalla
      if(timeMinutes === 0){// y mostraremos el valor acutal que es 0
          clearInterval(intervalRef.current)
          showResults = true;
      }else{
        setTimeMinutes(timeMinutes - 1) //1 segundo 
        setTimeSeconds(59); //59 segundos 
      }
  }
  
  return (
    <section className="sectionbtn flexbox">


      {showResults && <Results
      
          clicks ={counter}
      />}


      <div className="">
        <h2> Revienta ese boton! </h2> 
        <p className="times">
          {timeMinutes < 10 ? "0" + timeMinutes : timeMinutes}:
          {timeSeconds < 10 ? "0" + timeSeconds : timeSeconds}
        </p>
      </div>
      <div>
        <DisplayCounter counter={counter} />
      </div>
      <div className="containerBtns">
        <BtnClic counter={counter} handleChange={handleChange} text="CLICK" />
      </div>   
    </section>
  );
}