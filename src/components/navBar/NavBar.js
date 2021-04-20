import "../navBar/navbar.scss";
import carrito from "./basket-outline.svg";

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
      <div className="container-carrito">
        <img className="carrito-svg" src={carrito} alt="" />
        <p>{props.quantity}</p>
        <img src={props.user[0].avatar} alt="img-avatar" />
      </div>
    </nav>
  );
};
