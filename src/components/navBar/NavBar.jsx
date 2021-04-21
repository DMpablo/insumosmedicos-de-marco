import "../navBar/navbar.scss";
import carrito from "../navBar/basket-outline.svg";


export const NavBar = (props) => {
  return (
    <nav className="navBar">
      <a className="nombre_logo" href="/#">
        {props.logo[0]}
        <strong> {props.logo[1]}</strong>
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="/#">productos</a>
        </li>

        <li>
          <a href="/#">contacto</a>
        </li>
      </ul>
   

      <div className="container-avatar">
      <img className="carrito-svg" src={carrito} alt="svg-carrito" />
      <p className="quantity_product"></p>
        <p>|</p>
        <img
          className="img-avatar"
          src={props.user[0].avatar}
          alt="img-avatar"
        />
      </div>
    </nav>
  );
};
