import "./buttonChangeQuantity.scss";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const ButtonChangeQuantity = ({ item }) => {
  const { removeFromCart, restUnit, addUnit } = useContext(CartContext);

  return (
    <div className="container-carrito">
      <div className="container_button_change">
        <button className="btn" onClick={() => addUnit(item)}>
          +
        </button>
        <p>{item.units}</p>
        <button className="btn" onClick={() => restUnit(item)}>
          -
        </button>
        <button className="btn" onClick={() => removeFromCart(item.id)}>
          ✖
        </button>
      </div>
    </div>
  );
};
