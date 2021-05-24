import React from "react";
import "./CartDetail.scss";

import { ButtonChangeQuantity } from "../buttonChangeQuantity/ButtonChangeQuantity";

function CartDetail({ imageId, title, price, item , stock}) {
  return (
    <div className="cart_detail">
      <img src={imageId} alt="" />
      <p className="detail_title">{title}</p>
      <div className="detail_price_button">
        <b className="detail_price">${price}</b>
        <p>Stock disponible:  {stock}</p>
        <ButtonChangeQuantity item={item} />
      </div>
    </div>
  );
}

export default CartDetail;
