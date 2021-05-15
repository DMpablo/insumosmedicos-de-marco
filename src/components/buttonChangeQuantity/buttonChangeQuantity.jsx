import "./buttonChangeQuantity.scss";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const ButtonChangeQuantity = ({ item }) => {
  const { removeFromCart, cart } = useContext(CartContext);

  console.log(cart);


  return (
    <div className="container-carrito">
      <div className='container_button_change'>
        <button className="btn">
          +
        </button>
         <button className="btn" >
          -
        </button>
        <button className="btn" onClick={() => removeFromCart(item.id)}>
        ❌
      </button>
      </div>
      
     
    </div>
  );
};
