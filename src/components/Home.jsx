import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import {ItemDetailContainer} from './ItemDetailContainer';

// Class defino componente
// Componente es una funcion render que me trae un div/h
// Props lo defino en el APP.JS


class Home extends React.Component {
  render() {
    return   <div>

    <h2>Bienvenido {this.props.pila}!</h2>

    <ItemDetailContainer/>

    </div>
  }
}

export default Home;