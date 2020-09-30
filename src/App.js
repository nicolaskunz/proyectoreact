import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
// import Jumbotron from './components/Jumbotron';
import { CartIconBoton } from './components/CartIconBoton';
import Home from './components/Home';
// import Form from './components/Form';
// import Imagen from './components/Imagen';
// import Contador from './components/Contador';
import ContadorComp from './components/ContadorCompuesto';
// import { CartIcon } from './components/CartIcon';
// import TodoList from './components/TodoList/TodoList';
// import Item from './components/ItemList/Item.jsx';
import {ItemList} from './components/ItemList/ItemList';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import {ItemDetailContainer2} from './components/ItemDetailContainer2';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import { Switch } from '@material-ui/core';
// import {ItemDetail} from './components/ItemDetail';
import Cart from './components/Cart.jsx';
import ParamsExample from './components/ParamsExample.jsx';
// 

function App() {
  return (
    <div className="App" >
    <header className="App-header">

<BrowserRouter>
  <NavBar/>
  <br/>
    <Switch>
    <Route exact path='/'>
    <Home class="prod" pila="USER"/>

    <br/>
    <ParamsExample/>
    
    <br/>
    </Route>

    <Route path='/ItemList'>
    <ItemList/>
    </Route>

    <Route path='/cart'>
    <Cart/>    
    </Route>

    <Route path='/item/24'>
    <br/>
    <ItemDetailContainer2 id="24" name="Television" stock='4' img='https://i.blogs.es/113546/xiaomimitvcalidad2/450_1000.jpg' descripcion="Television Samsung 48 pulgadas, ensamblado en tierra del fuego"/>
    </Route>
    <Route path='/item/20'>
    <br/>
    <ItemDetailContainer2 id="20" name="Celular" stock='7' img='https://images-na.ssl-images-amazon.com/images/I/715SteQ%2Bi3L._AC_SY355_.jpg' descripcion="Celular Moto G 8, emsamblado en China" />
    </Route>

  <ContadorComp/>

  </Switch>
  </BrowserRouter>
    </header>
  </div>
);
}

export default App;
