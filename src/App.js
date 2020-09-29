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
// import {ItemDetailContainer} from './components/ItemDetailContainer';
import {ItemDetailContainer2} from './components/ItemDetailContainer2';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import { Switch } from '@material-ui/core';
// import {ItemDetail} from './components/ItemDetail';
import Cart from './components/Cart.jsx';
// 

function App() {
  return (
    <div className="App" >
    <header className="App-header">

<BrowserRouter>
  <NavBar/>

    <Switch>
    <Route exact path='/'>
    <Home class="prod" pila="USER"/>

    <br/>
    <CartIconBoton/>
    
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
      <ItemDetailContainer2 id="24" name="Television" stock='4' img='tv'/>
    </Route>
    <Route path='/item/20'>
    <br/>
    <ItemDetailContainer2 id="20" name="Celular" stock='7' img='cel' />
    </Route>

  <ContadorComp/>

  </Switch>
  </BrowserRouter>
    </header>
  </div>
);
}

export default App;
