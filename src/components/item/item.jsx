import "./item.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { ButtonSeeMore } from "../ButtonSeeMore/ButtonSeeMore";

export const Item = ({ newCat }) => {
  const { cart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="card row">
        <div className="card-image col m4 s12">
          <img src={newCat.imageId} alt="imagen producto" />
        </div>
        <div className="card-content col m6 s12">
          <span className="card-title">{newCat.title}</span>
          <b>$ {newCat.price}</b>
        </div>
        {cart.find((e) => e.id === newCat.id) ? (
          <div className="card-button col m2 s12">
            <Link to="/cart">
              <button className="btn btn_add">ver en carrito</button>
            </Link>
          </div>
        ) : (
          <div className="card-button col m2 s12">
            <Link to={`/itemDetailContainer/${newCat.category}/${newCat.id}`}>
              <ButtonSeeMore />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
