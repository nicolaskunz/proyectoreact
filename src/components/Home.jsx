import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import {ItemDetailContainer} from './ItemDetailContainer';
import {ItemDetailContainer2} from './ItemDetailContainer2';
// Class defino componente
// Componente es una funcion render que me trae un div/h
// Props lo defino en el APP.JS
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends React.Component {
  render() {
    return   <div>
    <br></br>
    <h2>Bienvenido {this.props.pila}!</h2>
    <br></br>
    <Link to="/item/24"> <ItemDetailContainer id="24" name="Television" stock='4' img='https://i.blogs.es/113546/xiaomimitvcalidad2/450_1000.jpg' descripcion="Television Samsung 48 pulgadas, ensamblado en tierra del fuego"/></Link>
    <br></br>
    <Link to="/item/20"> <ItemDetailContainer id="20" name="Celular" stock='7' img='cel' /></Link>



    </div>
  }
}

export default Home;

//    <br></br>
// <Link to="/item/24"> <ItemDetailContainer2 id="24" name="Television" stock='4' img='tv'/></Link>
// <br></br>
// <Link to="/item/20"> <ItemDetailContainer2 id="20" name="Celular" stock='7' img='cel' /></Link>
