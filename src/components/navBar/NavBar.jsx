import "../navBar/navbar.scss";
import { Link } from "react-router-dom";
import carrito from "../navBar/basket-outline.svg";

export const NavBar = (props) => {
  return (
    <nav className="navBar">
    <Link className="nombre_logo"  to="/">{props.logo[0]}
        <strong> {props.logo[1]}</strong> </Link>
  
      <ul id="nav-mobile" className="right">
        <li><Link to="/category">categorias</Link></li>
        <p>|</p>
        <li><Link to="/contact">contacto</Link></li>
      </ul>

      <div className="container-avatar">
        <img className="carrito-svg" src={carrito} alt="svg-carrito" />
        <p className="quantity_product">0</p>

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
