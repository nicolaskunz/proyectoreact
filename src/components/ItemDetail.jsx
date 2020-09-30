import React from 'react';

import ContadorComp from './ContadorCompuesto.jsx';
import Item from './ItemList/Item.jsx';
import {BotonCompra} from './BotonCompra.jsx';
import Imagen from './Imagen';
import Descripcion from './Descripcion';
// import { Link } from 'react-router-dom';



export function ItemDetail(props) {

      return  <div> 
      <div> 
     <Item id={props.id} name={props.name}/>
     <br/>
    </div>
    <Imagen img={props.img}/>
    <br/><br/><br/>
    <Descripcion descripcion={props.descripcion}/>
    <br/>
    <ContadorComp stock={props.stock}/>
    <br/>
    <div>Stock disponible: {props.stock}. </div>
    <BotonCompra/>
    </div>   ;

  }

