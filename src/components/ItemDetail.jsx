import React, { useEffect, useState }  from 'react';

import ContadorComp from './ContadorCompuesto.jsx';
import Item from './ItemList/Item.jsx';
import {BotonCompra} from './BotonCompra.jsx';

export function ItemDetail() {

    const Producto = [
        { id: "2", name: "celular" },
      ];    

      return  <div> 
      <div> 
    <Item Producto={Producto}/>
    </div>
    <ContadorComp/>
    <BotonCompra/>
    </div>   ;

  }

