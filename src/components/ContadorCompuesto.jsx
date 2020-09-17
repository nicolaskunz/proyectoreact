import React from "react";
import { useState } from 'react';
import { BotonContador } from './BotonContador.jsx'



function ContadorComp() {
    const [count, setCount] = useState(0) ;
    

    return (
      <div>
        <p>Contador:{count}.</p>

            <BotonContador handleClick={()=> {if (count > 0) {setCount(count -1);} else {alert('La cantidad no puede ser menor a 0')};}} signo="-" />
            <BotonContador handleClick={()=> {if (count <= 4) {setCount(count +1);} else {alert('La cantidad no puede ser mayor a 5')};}} signo="+" />


      </div>
    );
  }

export default ContadorComp;  
  


