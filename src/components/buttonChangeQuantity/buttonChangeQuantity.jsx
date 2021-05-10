import "./buttonChangeQuantity.scss";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const ButtonChangeQuantity = ({ sum, quantity, rest, item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="container-carrito">
      <div className='container_button_change'>
        <button className="btn" onClick={sum}>
          +
        </button>
        <input className="w-25" type="number" placeholder={quantity} />
        <button className="btn" onClick={rest}>
          -
        </button>
        <button className="btn" onClick={() => removeFromCart(item.id)}>
        ❌
      </button>
      </div>
      
     
    </div>
  );
};
