import React from 'react'
import './estilosBarra.css'

/**
Definimos Variable como una funcion que define un elemento en el Dom
En este caso definimos la variable 
 */

export function CartIconBoton() {

  const alerta = () => {
    alert('hola');
}
  return <button onClick={ alerta }>
Alerta
  </button>
} 



