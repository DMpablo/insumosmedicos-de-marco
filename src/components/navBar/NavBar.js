import "../navBar/navbar.scss";
import carrito from "./basket-outline.svg";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <a className="nombre_logo" href="/#">
        insumos <strong>medicos</strong>
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <img className="carrito-svg" src={carrito} alt="" />
        </li>
        <li>
          <a href="/#">productos</a>
        </li>
        <li>
          <a href="/#">contacto</a>
        </li>
      </ul>
    </nav>
  );  
};
