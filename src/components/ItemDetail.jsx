import React from 'react';

import ContadorComp from './ContadorCompuesto.jsx';
import Item from './ItemList/Item.jsx';
import {BotonCompra} from './BotonCompra.jsx';

export function ItemDetail(props) {

      return  <div> 
      <div> 
    <Item id={props.id} name={props.name}/>
    </div>
    <ContadorComp/>
    <BotonCompra/>
    </div>   ;

  }

