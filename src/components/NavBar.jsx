import React from 'react'
import './estilosBarra.css'
import { CartIcon } from './CartIcon';


const NavBar = () => 

<nav class="nav nav-pills nav-fill">
  <a class="nav-item nav-link active" href="http://google.com">Active 💣 </a>
  <a class="nav-item nav-link" href="http://google.com">Link</a>
  <a class="nav-item nav-link" href="http://google.com">Link</a>
  <a class="nav-item nav-link disabled" href="http://google.com">Disabled</a>
</nav>

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