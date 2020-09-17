import React from "react";
// llamar al usestate sino no funciona
import { useState } from 'react';



function Contador() {

    //  USE STATE DEFINE EL VALOR BASE
    const [count, setCount] = useState(0);
  
    return (
      <div>

{/* Contador es un string y lo que esta en {} es el valor dinamico */}

        <p>Contador:{count}.</p>

        <button onClick={() => setCount(count + 1)}>
          +
        </button>

        <button onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    );
  }

export default Contador;  
  