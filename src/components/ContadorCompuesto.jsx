import React from "react";
import { useState } from 'react';
import { BotonContador } from './BotonContador.jsx'



function ContadorComp(props) {
    const [count, setCount] = useState(0) ;
    

    return (
      <div>
        <p>¿Cuantas unidades queres? {count}.</p>

            <BotonContador handleClick={()=> {if (count > 0) {setCount(count -1);} else {alert('La cantidad no puede ser menor a 0')};}} signo="-" />
            <BotonContador handleClick={()=> {if (count < props.stock) {setCount(count +1);} else {alert("La cantidad no puede superar el stock disponible de " + props.stock + " unidades")};}} signo="+" />


      </div>
    );
  }

export default ContadorComp;  
  


