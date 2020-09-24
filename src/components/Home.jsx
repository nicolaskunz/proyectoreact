import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
// import {ItemDetailContainer} from './ItemDetailContainer';
import {ItemDetailContainer2} from './ItemDetailContainer2';
// Class defino componente
// Componente es una funcion render que me trae un div/h
// Props lo defino en el APP.JS
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return   <div>

    <h2>Bienvenido {this.props.pila}!</h2>
    <Link to="/item/:id"> <ItemDetailContainer2 id="24" name="Television" stock='4'/></Link>
    <Link to="/item/20"> <ItemDetailContainer2 id="20" name="Celular" stock='7' /></Link>

    </div>
  }
}

export default Home;