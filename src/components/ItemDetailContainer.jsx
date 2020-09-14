import React, { useEffect, useState }  from 'react';
import {ItemDetail} from './ItemDetail';

export function ItemDetailContainer() {
   
    const [producto, setProducto] = useState([]);  
    const [loading, setLoading] = useState(false);

    const fnWithPromise = () => {
      
      // Promise

        return new Promise((resolve, reject) => {
        setLoading(true);
        return setTimeout(() => {
          const fakeList = [
            { id: "2", name: "celular" },
            { id: "7", name: "Lavarropas" }
          ];        
          
          console.log('Si lees esto es por uqe funciona');
          setLoading(false);
          // Fakelist es la variable donde esta alojada la lista
          return resolve(fakeList);
        
        }, 2000);
      });

    }; 

    // El UseEffect ejecuta la funcion fnWithPromise, que le pasa "fakelist" Como prop de "Productos", que setea el useState con "Productos" 
    useEffect(() => {
      fnWithPromise().then((producto) => setProducto(producto));
    }, []);  
    

    if(loading) {
      return <div>Loading...</div>
    }
// Else
    const listaProducto = producto.map((producto) => (
      <ItemDetail id={producto.id} name={producto.name} />
    ));  return  <div> 
      
      <ul>{listaProducto}</ul> 
      
    </div>   ;
    

  }

