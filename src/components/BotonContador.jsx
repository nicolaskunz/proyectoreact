import React from 'react'


export function BotonContador(props) {
    const {handleClick, signo} = props;
    return <button onClick={handleClick}> {signo} </button>
} 

  
