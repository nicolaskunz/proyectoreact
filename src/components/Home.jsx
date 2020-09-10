import React from 'react';

// Class defino componente
// Componente es una funcion render que me trae un div/h
// Props lo defino en el APP.JS


class Home extends React.Component {
  render() {
    return <h2>Bienvenido {this.props.pila}!</h2>
  }
}

export default Home;