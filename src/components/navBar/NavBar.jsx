import "../navBar/navbar.scss";
import { Link } from "react-router-dom";
import carrito from "../navBar/basket-outline.svg";
import { ItemCount } from "../ItemCount/ItemCount";
export const NavBar = ({ quantity }) => {
  return (
    <nav className="navBar">
      <Link className="nombre_logo" to="/">
        i<strong> m</strong>{" "}
      </Link>

      <ul id="nav-mobile" className="right">
        <li key={'index'}>
          <Link to="/category">productos</Link>
        </li>
        <p>|</p>
        <li>
          <Link to="/contact">contacto</Link>
        </li>
      </ul>

      <div className="container-avatar">
        <img className="carrito-svg" src={carrito} alt="svg-carrito" />
        <Link to="/cart">
          <ItemCount quantity={quantity} />
        </Link>

        <p>|</p>
  {/*       <img
          className="img-avatar"
          src="https://via.placeholder.com/200x200/92d19a/ffffff"
          alt="img-avatar"
        /> */}
      </div>
    </nav>
  );
};
