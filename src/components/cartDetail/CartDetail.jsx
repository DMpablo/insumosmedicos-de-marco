import React from "react";
import "./CartDetail.scss";

import { ButtonChangeQuantity } from "../buttonChangeQuantity/ButtonChangeQuantity";

function CartDetail({ imageId, title, price, item, stock }) {
  return (
    <div className="cart_detail row">
    <div className='col  s4'>
        <img src={imageId} alt="" />
    </div>
      <div className="detail_price_button col s8">
        <p className="detail_title">{title}</p>
        <p>Stock disponible: {stock}</p>
        <b className="detail_price">${price}</b>
        <ButtonChangeQuantity item={item} />
      </div>
    </div>
  );
}

export default CartDetail;
