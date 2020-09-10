import React from "react";
import { useState } from 'react';
import { BotonContador } from './BotonContador.jsx'



function ContadorComp() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Contador:{count}.</p>

            <BotonContador handleClick={()=>setCount(count -1)} signo="-" />
            <BotonContador handleClick={()=>setCount(count +1)} signo="+" />

      </div>
    );
  }

export default ContadorComp;  
  


