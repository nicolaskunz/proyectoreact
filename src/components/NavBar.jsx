import React from 'react'
import './estilosBarra.css'
import { CartIcon } from './CartIcon';


const NavBar = () => 

<nav class="nav nav-pills nav-fill">
  <a class="nav-item nav-link active" href='/'>Home</a>
  <a class="nav-item nav-link" href="http://google.com">GOOGLE</a>
  <a class="nav-item nav-link" href="http://google.com">GOOGLE</a>
  <a class="nav-item nav-link" href='/cart'><CartIcon/></a>
</nav>

export default NavBar;