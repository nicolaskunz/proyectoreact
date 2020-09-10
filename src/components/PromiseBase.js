import React from "react";
      
// Defino la funcion y defino las props

   function Item(props) {  
     return (  
       <>  
         <li key={props.producto.id}>{props.producto.nombre}</li>  
       </>  
     );  
   }  
      
// Defino la Funcion y dejo vacio el array de prod y de error   
              
 function ItemsList() {
    const [productos, setProductos] = useState([]);               
    const [error, setError] = useState("");
   
    obtenerProductos()
      .then((productos) => {
        setProductos(productos);
      })
      .catch((err) => {
        setError(err);   
      });
     if (!error) {
       return (
         <ul>
           {productos.map((producto) => (
             <Item producto={producto} />
           ))}
         </ul>  
       );
     } else return <span>{error}</span>;
  }
  
// Funcion que trae/alimenta el array que luego va a mapearse con .map

function obtenerProductos() {                                                                                          
     return new Promise((resolve, reject) => {                            
         setTimeout(() => {                                                 
           resolve([                                                        
             { id: 1, nombre: "Celular" },                                  
             { id: 2, nombre: "Televisor" },                                
             { id: 3, nombre: "Heladera" },
           ]);                                                              
         }, 2000);                                                          
       });                                                                  
    }   