# Juego de contador de clicks 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 🎯 Acerca del juego 

Es un juego donde se reta a hacer tantos clics como puedas en un determinado tiempo, dependiendo del tiempo se mostrara una imagen, una leyenda de tu velocidad, tus clics totales y tus CPS.

# ⏩  Demo

[Demo del juego solo pincha aquí](https://floressdi.github.io/game-clicks/)

#  🚀  Tecnologías

[React JS](https://es.react.dev/)


# Características
✅ UseState

✅ Props

✅ Deploy en gh-pages

✅ Renderizado condicional


# Obtener código en mi pc
Para descargar el codigo de este juego solo copia y pega el siguiente comando en tu terminal en una carpeta de tu preferencia

```bash
git clone https://github.com/floressdi/game-clicks
```

# Código 


## Componente Inicio
En el componente [inicio](https://github.com/floressdi/game-clicks/blob/main/src/components/Inicio.js) hice uso de useState para el renderizado del componente donde se encuentra el juego 

```bash
import React, { useState } from 'react'
```

Manejaremos el estado del inicio del juego, lo inicializamos en false
y crearemos una función que lo cambie a true,  con `setStart` actualizaremos la variable `start` .

```bash
const [start, setStart]=useState(false); 
  const clicks = ()=>{
        setStart(true)
  }
```

Al dar click en el boton llamaremos a la función `clicks` cambiando su valor.
```bash
 <button onClick={clicks}>
        <p>jugar!</p>
</button>
```

Si `start`   es verdadero se renderiza el componente `Game` esto solo ocurre si el botón fue presionado dando como resultado la llamada de la función `clics`
```bash
  {start && <Game />}  
```


## Componente BtnClic
El componente `BtnClic` recibe como argumento a `counter`, `handleChange` y `text` los tres son iguales a `prop`, es importante indicar al componente que se espera recibir un prop como argumento.

```bash
function BtnClic(prop) {
 const {counter, handleChange, text} = prop
```
El botón llamará a la función `handleChange` para actualizar el valor del contador y el valor es `value` .
```bash
  <button 
        onClick={handleChange}
        value ={counter}
  >
     <p>{text}</p>
  </button>
```
y el `texto` será el que pasemos como parámetro en el siguiente componente


## Componente Game

Al igual que en el componente `inicio` usaremos `useState` para contar los clics, y haremos uso de  `useRef` y `useEffect` para nuestra cuenta regresiva de los segundos

```bash
import React, { useRef, useEffect, useState } from "react";
```
Crearemos una función que que actualize el evento click aumentado el contador del click.
```bash
function handleChange(e) {
 setCounter(counter + 1); 
}
```

Importamos el componente [BtnClic](https://github.com/floressdi/game-clicks/blob/main/src/components/BtnClic.js)
```bash
import BtnClic from "./BtnClic";
```

Renderizamos el componente [BtnClic](https://github.com/floressdi/game-clicks/blob/main/src/components/BtnClic.js) pasandole como parametro la variable `{counter}` y el evento `{handleChange}` y el texto del botón `"CLICK"`

```bash
<BtnClic 
  counter={counter} 
  handleChange={handleChange} 
  text="CLICK" />
```
Para manejar la cuenta regresiva usaremos useState donde `timeSeconds` será nuestra variable de segundos y `setTimeSeconds` será nuestra función que actualice a la variable `timeSeconds`
la declaramos con un valor de 30 que serán nuestros segundos

```bash
 const [timeSeconds, setTimeSeconds] = useState(30);
```

Se declara una variable con useReff para guardar el valor anterior hasta que le pidamos actualizarse accediendo a .current

```bash
let intervalRef = useRef();
```
La función timer accede a la función  donde le indicamos que reste de 1 en 1
```bash
 const timer = ()=> setTimeSeconds((prev)=>prev-1);
```

Con useEffect ejecutaremos un el siguiente código en el momento que se encuentre el ciclo de nuestro componente en este caso el tiempo en que lo hará será de 1000 milisegundos = 1 segundo
```bash
  useEffect(()=>{
    intervalRef.current = setInterval(timer, 1000);

    return() => clearInterval(intervalRef.current);
  }, []);
```

Los segundos se muestran de la siguiente manera
```bash
 <p>
     {timeMinutes < 10 ? "0" + timeMinutes : timeMinutes}:
     {timeSeconds < 10 ? "0" + timeSeconds : timeSeconds}
 </p>
```
finalmente cuando los segundos lleguen a cero renderizaremos el componente [Results](https://github.com/floressdi/game-clicks/blob/main/src/components/Results.js) con la variable `showResults` y actualizamos el nuevo valor donde se quedó.

```bash
 let showResults = false;
  if(timeSeconds === 0){ 
      if(timeMinutes === 0){
          clearInterval(intervalRef.current)
          showResults = true;
      }else{
        setTimeMinutes(timeMinutes - 1)  
        setTimeSeconds(59); 
      }
  }
```

Renderizamos los resultados y de paso le pasamos como parámetro los clics que logrados dentro del tiempo permitido.
```bash
  {showResults && <Results
          clicks ={counter}
  />}
```
## Componente Results
En este componente recibimos los clics y de paso creamos una función para truncar el promedio de clics logrados.

```bash
export default function Results(props) {
  let media = props.clicks / 30;

  function dosDecimales(n){ 
    let t =n.toString();
    let regex=/(\d*.\d{0,2})/;
    return t.match(regex)[0];
  }
```

Haremos uso de unas variables que se actualizaran dependiendo de los clics logrados
```bash
  let tiempo;
  let leyenda;
  let imagen;
  let ico;
```

Con la condición if cambiarán los valores
```bash
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
```

Mostraremos los resultados en el DOM
```bash
    <p> Hiciste <span>{props.clicks} </span> Clicks en{" "}
         <span>30 segundos!</span>
    </p>
    <p>
        Tu <span>{tiempo}</span> de click es 
        <span>{dosDecimales(media)}</span> CPS
    </p>
     <p>{leyenda}</p>
     <ImgResut imagen={imagen} />
    <BtnDelete text="Intentar otra vez " />
```

# Componente BtnDelete
El botón solo reinicia la página 
```bash
const resetGame = () =>{
    window.location.reload(true)
  }
```

```bash
<button onClick={resetGame}>
      <p>{prop.text}</p>
</button>
```
