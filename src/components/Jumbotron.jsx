import React from 'react'

/*
import './estilosBarra.css'
Para importar CSS
*/

/**
Definimos Variable como una funcion que define un elemento en el Dom

const Jumbotron = () => 

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>

export default Jumbotron;



 */

const Jumbotron = () => <div>

<div class="jumbotron text-center">
<h1>My First Bootstrap Page</h1>
<p>Resize this responsive page to see the effect!</p>
</div>

<div class="container">
  <div class="row">
      <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor..</p>
      </div>
    <div class="col-sm-4">
    <h3>Column 2</h3>
    <p>Lorem ipsum dolor..</p>
    </div>
    <div class="col-sm-4">
    <h3>Column 3</h3>
    <p>Lorem ipsum dolor..</p>
  </div>
 </div>
</div> 

</div>

export default Jumbotron;