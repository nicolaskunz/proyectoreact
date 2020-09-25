import React from 'react';
// import Imagen from './Imagen';

// console.log(logo); // /logo.84287d09.png

function Imagen(props) {

// Import result is the URL of your image

  return <img src={props.img} alt={props.img} />;
}

export default Imagen;