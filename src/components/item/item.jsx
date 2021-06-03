import "./item.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { ButtonSeeMore } from "../ButtonSeeMore/ButtonSeeMore";

export const Item = ({ newCat }) => {
  const { cart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="card">
        <div className="card-image">
          <img src={newCat.imageId} alt="imagen producto" />
        </div>
        <div className="card-content">
          <span className="card-title">{newCat.title}</span>
          <b>$ {newCat.price}</b>
        </div>
        {cart.find((e) => e.id === newCat.id) ? (
          <Link to="/cart">
            <button className="btn btn_add">ver en carrito</button>
          </Link>
        ) : (
          <Link to={`/itemDetailContainer/${newCat.category}/${newCat.id}`}>
            <ButtonSeeMore />
          </Link>
        )}
      </div>
    </div>
  );
};
