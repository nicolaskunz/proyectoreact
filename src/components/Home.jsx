import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import {ItemDetailContainer} from './ItemDetailContainer';
import {ItemDetailContainer2} from './ItemDetailContainer2';
// Class defino componente
// Componente es una funcion render que me trae un div/h
// Props lo defino en el APP.JS


class Home extends React.Component {
  render() {
    return   <div>

    <h2>Bienvenido {this.props.pila}!</h2>

    <ItemDetailContainer/>
    
    <ItemDetailContainer2 id="24" name="Television" stock='4'/>
    </div>
  }
}

export default Home;