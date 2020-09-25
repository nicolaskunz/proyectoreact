import React, { useEffect, useState }  from 'react';
import {ItemDetail} from './ItemDetail';
import { CircularProgress } from '@material-ui/core';
import '../App.css';

export function ItemDetailContainer2(props) {
   
    const [producto, setProducto] = useState([]);  
    const [loading, setLoading] = useState(false);

    const fnWithPromise = () => {
      
      // Promise

        return new Promise((resolve, reject) => {
        setLoading(true);
        return setTimeout(() => {
          const fakeList = [
            { id: props.id, name: props.name, stock: props.stock},

          ];        

          setLoading(false);
          // Fakelist es la variable donde esta alojada la lista
          return resolve(fakeList);
        
        }, 3000);
      });

    }; 

    // El UseEffect ejecuta la funcion fnWithPromise, que le pasa "fakelist" Como prop de "Productos", que setea el State "Productos" con la info de "fakelist"
    useEffect(() => {
      fnWithPromise().then((producto) => setProducto(producto));
    }, []);  
    

    if(loading) {
      return <CircularProgress/>
    }
// Else
    const listaProducto = producto.map((producto) => (
// Listaproducto trae una un segundo array ya mapeado que pasa como prop al componente que trae
      <ItemDetail id={producto.id} name={producto.name} stock={producto.stock} />
// El return devuelve una lista donde cada componente del map se renderiza en un compnente itemdetail de esa lista.
));  return  <div class="prod"> 
      
      <ul>{listaProducto}</ul> 
      
    </div>   ;
    

  }

