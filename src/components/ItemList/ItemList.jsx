import React, { useEffect, useState }  from 'react';
import Item from './Item.jsx';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

export function ItemList() {
   
    const [productos, setProductos] = useState([]);  
    const [loading, setLoading] = useState(false);

    const fnWithPromise = () => {

      
      // Promise

        return new Promise((resolve, reject) => {
          setLoading(true);
        return setTimeout(() => {
          const fakeList = [
            { id: "1", name: "Laptop OFERTA" },
            { id: "7", name: "Monitor OFERTA" },
            { id: "4", name: "Mouse OFERTA" },
          ];        
          setLoading(false);
          // Fakelist es la variable donde esta alojada la lista
          return resolve(fakeList);
        }, 1000);
      });

    }; 

    // El UseEffect ejecuta la funcion fnWithPromise, que le pasa "fakelist" Como prop de "Productos", que setea el useState con "Productos" 
    useEffect(() => {
      fnWithPromise().then((productos) => setProductos(productos));
    }, []);  
    
    
    if(loading) {
      return <CircularProgress/>
    }

    const listaProductos = productos.map((productos) => (
      <Link to="/item/:id"><Item id={productos.id} name={productos.name} /></Link> 
    ));  return  <ul>{listaProductos}</ul> ;
  }

