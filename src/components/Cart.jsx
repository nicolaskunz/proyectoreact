import React, { useContext } from 'react';
import {ThemeContext} from '../Context/cartContext';



const Cart = () => {
    const [cart, setCart] = useContext (ThemeContext);

    return(
        <div>
    <h2>Carrito</h2>
    <span>Items en carrito: {cart.lenght}</span>
    <br></br>
    <span>Precio Total: 0 </span>
        </div>
    )
}

export default Cart;