import React, { useRef, useEffect, useState } from "react";
import BtnClic from "./BtnClic";
import DisplayCounter from "./DisplayCounter";
import Results from "./Results";
import soundclic from '../sounds/pew_pew-dknight556-1379997159.mp3'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../App.css";

export default function Game() {
  const [counter, setCounter] = useState(0);

  // function sound(){ //function of sound al dar click
  //   new Audio(soundclic).play();
  // }

  function handleChange(e) {//aumentamos contador de clicks
    // sound()// call function sound
    setCounter(counter + 1);
  }

  function resetCounter(e) {
    setCounter(0);
  }

  const [timeMinutes, setTimeMinutes] = useState(0); //Iniciamos en un minuto
  const [timeSeconds, setTimeSeconds] = useState(10);

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

      {/* <Results/> */}

      <div className="circularbarprogress">
        {/* <h2> Revienta ese boton! </h2>  */}

        <CircularProgressbar 
          value={timeSeconds}
          maxValue={10} 
          text={timeSeconds}
          styles={buildStyles({
            
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
        
            // Text size
            textSize: '30px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: timeSeconds,
        
            // Colors
            pathColor: `rgba(234, 198, 8)`,
            textColor: '#EAC608',
            trailColor: '#1C1C1C',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
      <div>
        <DisplayCounter counter={counter} />
      </div>
      <div className=" displaybtn flexbox">
        <BtnClic counter={counter} handleChange={handleChange} text="CLICK" />
      </div>   
    </section>
  );
}