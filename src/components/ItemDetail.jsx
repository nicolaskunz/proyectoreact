import React from 'react';

import ContadorComp from './ContadorCompuesto.jsx';
import Item from './ItemList/Item.jsx';
import {BotonCompra} from './BotonCompra.jsx';
import Imagen from './Imagen';
// import { Link } from 'react-router-dom';

export function ItemDetail(props) {

      return  <div> 
      <div> 
     <Item id={props.id} name={props.name}/>
    </div>
    <Imagen img={props.img}/>
    <ContadorComp stock={props.stock}/>
    <div>Stock disponible: {props.stock}. </div>
    <BotonCompra/>
    </div>   ;

  }

