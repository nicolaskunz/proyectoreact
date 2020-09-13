import React, { useEffect, useState }  from 'react';
import Item from './Item.jsx';


export function ItemList() {
    const [productos, setProductos] = useState([]);  const fnWithPromise = () => {
      return new Promise((resolve, reject) => {
        return setTimeout(() => {
          const fakeList = [
            { id: "1", name: "producto1" },
            { id: "7", name: "producto7" },
            { id: "4", name: "producto4" },
          ];        return resolve(fakeList);
        }, 2000);
      });
    };  useEffect(() => {
      fnWithPromise().then((productos) => setProductos(productos));
    }, []);  const listaProductos = productos.map((productos) => (
      <Item id={productos.id} name={productos.name} />
    ));  return <ul>{listaProductos}</ul>;
  }


  
// Ejemplo basico
// Nunca me figura este console log:

// setTimeout(() => {
//     console.log('you can see me after 2 seconds')
// }, 2000);


// ejemplo que dio el profe:
// const task = new Promise((resolve, reject) => {

    // setTimeout(() => {
    //   const data = [
    //     {id: 'string', name: 'string', description: 'string', stock: 4},
    //     {id: 'string', name: 'string', description: 'string', stock: 4},
    //     {id: 'string', name: 'string', description: 'string', stock: 4}
    //   ]
    //   return data;


