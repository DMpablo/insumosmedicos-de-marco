import "../itemDetail/ItemDetail.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({ ItemID, onAdd }) => {
  const { cart } = useContext(CartContext);
  const cartId = cart.find((e) => e.id === ItemID.id);

  return (
    <div className="item_detail_container">
      <img src={ItemID.picture} alt={ItemID.title} />
      <div className="item_detail">
        <p className="title_detail">{ItemID.title}</p>
        <p className="price_detail">{ItemID?.price?.amount}</p>
        <div className="function_buttons">
          {cartId ? (
            <Link to="/cart">
              <button className="btn btn_add">ver en carrito</button>
            </Link>
          ) : (
            <button className="btn btn_add" onClick={onAdd}>
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
