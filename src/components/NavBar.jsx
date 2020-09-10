import React from 'react'
import './estilosBarra.css'
import { CartIcon } from './CartIcon';


const NavBar = () => 
<div>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="http://google.com">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="http://google.com">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://google.com">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://google.com"><CartIcon/></a>
      </li>    
    </ul>
  </div>  
</nav>

</div>

export default NavBar;






/**

const NavBar = () => <div>
  <ul class="nav justify-content-center" id="lista">
  <li class="nav-item">
    <a class="nav-link active" href="Http://Google.com">Google</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="Http://Reddit.com">Reddit</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="Http://amazon.com"><CartIcon/></a>
  </li>

</ul>
</div> 
export default NavBar;

*/
/**
  
 import { CartIconBoton } from './CartIconBoton'; 
  
 
  <li class="nav-item">
  <CartIconBoton/>
  </li>

 */