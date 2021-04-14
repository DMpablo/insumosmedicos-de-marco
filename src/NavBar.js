import '../node_modules/materialize-css/dist/css/materialize.min.css';

import React from 'react'

function NavBar() {
    return (
        
<nav className="navBar">
    <div class="nav-wrapper">
    <a className="nombre_logo" href="/#" > insumos <strong>medicos</strong></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/#">carrito</a></li>
        <li><a href="/#">productos</a></li>
        <li><a href="/#">contacto</a></li>
      </ul>
    </div>
  </nav>
    )
}

export default NavBar
