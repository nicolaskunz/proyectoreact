import React, { useEffect, useState }  from 'react';
import Item from './ItemList/Item.jsx';


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
      <Item id={producto.id} name={producto.name} />
    ));  return <ul>{listaProducto}</ul>;

  }

