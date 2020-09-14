import React from 'react';
import logo from './logo.svg';
import './App.css';
// import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import { CartIconBoton } from './components/CartIconBoton';
import Home from './components/Home';
import Form from './components/Form';
import Imagen from './components/Imagen';
// import Contador from './components/Contador';
import ContadorComp from './components/ContadorCompuesto';
// import { CartIcon } from './components/CartIcon';
import TodoList from './components/TodoList/TodoList';
// import Item from './components/ItemList/Item.jsx';

import {ItemList} from './components/ItemList/ItemList';
import {ItemDetailContainer} from './components/ItemDetailContainer';
// import {ItemDetail} from './components/ItemDetail';


function App() {
  return (
    <div className="App" >
      <header className="App-header">

      <Home pila="Pibe"/>

      <ItemDetailContainer/>


     <TodoList/>

      <img src={logo} className="App-logo" alt="logo" />
      <br/>
      <CartIconBoton/>
      <br/>
      <Jumbotron/>
      <br/>
      <Form/>

      <ItemList/>
      <Imagen/>



     
    <ContadorComp/>

      </header>
    </div>
  );
}

export default App;






/*

Funcion Base de App

<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
*/
