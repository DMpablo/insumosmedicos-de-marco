import "./item.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { ButtonSeeMore } from "../ButtonSeeMore/ButtonSeeMore";

export const Item = ({ id, picture, title, price, catName }) => {
  const { cart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="card">
        <div className="card-image">
          <img src={picture} alt="imagen producto" />
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{price.amount}</p>
        </div>
        {cart.find((e) => e.id === id) ? (
          <Link to="/cart">
            <button className="btn btn_add">ver en carrito</button>
          </Link>
        ) : (
          <Link to={`/itemDetailContainer/${catName}/${id}`}>
            <ButtonSeeMore />
          </Link>
        )}
      </div>
    </div>
  );
};
