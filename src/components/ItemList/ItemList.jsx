import React, { useEffect, useState }  from 'react';
import Item from './Item.jsx';


export function ItemList() {
   
    const [productos, setProductos] = useState([]);  
    
    const fnWithPromise = () => {
      
      // Promise

        return new Promise((resolve, reject) => {
        return setTimeout(() => {
          const fakeList = [
            { id: "1", name: "producto1" },
            { id: "7", name: "producto7" },
            { id: "4", name: "producto4" },
          ];        
          
          // Fakelist es la variable donde esta alojada la lista
          return resolve(fakeList);
        }, 2000);
      });

    }; 

    // El UseEffect ejecuta la funcion fnWithPromise, que le pasa "fakelist" Como prop de "Productos", que setea el useState con "Productos" 
    useEffect(() => {
      fnWithPromise().then((productos) => setProductos(productos));
    }, []);  
    
    const listaProductos = productos.map((productos) => (
      <Item id={productos.id} name={productos.name} />
    ));  return <ul>{listaProductos}</ul>;
  }

