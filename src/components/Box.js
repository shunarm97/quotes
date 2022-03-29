// ------ IMPORTACION DE LOS RECURSOS-------
import React,   { useState } from 'react';
import Quotes from '../Quotes.json';
import './Box-cita.css';


// ---------- RAMDONS DE COLORES Y LAS CITAS -------------
const numRamdon = () => Math.floor(Math.random() * Quotes.length)
const Color = ['red', 'green', 'yellow','pink', 'bronw','blue','gray']
const colorRamdon = () => Math.floor(Math.random() * Color.length)

// ----------- AQUI DESARROLLAMOS LA LOCICA -----------
const Box = () => {

    // ------------ESTE ES EL RELOAD---------
    const [ cita, setCita ] = useState(Quotes[numRamdon()], 
                                       document.body.style.backgroundColor = Color[colorRamdon()] );
        // -----------ESTE ES EL BOTON---------
    const changeCita = () => {
        setCita(Quotes[numRamdon()])
        document.body.style.backgroundColor = Color[colorRamdon()]

    }

    // ----------AQUI ESTAN LOS RETURNS QUE SE MOSTRARAN EN PANTALLA-------
return (
   <div className='Box-cita'>
    <h2> {cita.quote}</h2>
    <p>{cita.author}</p>
    <button onClick={changeCita}>NEW QUOTE</button>
   </div>
);

};

export default Box;