import React from 'react'
import '../App.css';

export default function DisplayCounter(prop) {
  return (
    <div>
        <section className='displayCounter flexbox'>
                <p className='number' id=''> {prop.counter} </p>
        </section>
    </div>
  )
}