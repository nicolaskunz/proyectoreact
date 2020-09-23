import React, { useContext } from 'react';
import {ThemeContext} from '../Context/cartContext';



const Cart = () => {
   
    return(
        <div>
    <h2>Carrito</h2>
    <span>Items en carrito: </span>
    <br></br>
    <span>Precio Total: 0 </span>
        </div>
    )
}

export default Cart;

//  linea debajo del arrow function
// const [cart, setCart] = useContext (ThemeContext);
// {cart.lenght} en carrito