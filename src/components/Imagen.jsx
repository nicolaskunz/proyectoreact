import React from 'react';
import logo from './logo.png';

console.log(logo); // /logo.84287d09.png

function Imagen() {

// Import result is the URL of your image

  return <img src={logo} alt="Logo" />;
}

export default Imagen;