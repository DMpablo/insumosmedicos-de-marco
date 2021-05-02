import { useState, useEffect } from "react";
import { ButtonChangeQuantity } from "../buttonChangeQuantity/buttonChangeQuantity";
import "./functioButtons.scss";

export const FunctioButtons = () => {
  const [quantity, setQuantity] = useState(1);
  const stock = 100;

  const sum = () => {
    quantity < stock
      ? setQuantity(quantity + 1)
      : console.log("no hay mas stock");
  
  };

  const rest = () => {
    quantity > 0 ? setQuantity(quantity - 1) : alert("no resta mas");
   
  };

  useEffect(() => {
    if (quantity < 0) {
      alert("ya no se puede restar");
    }
  }, [quantity]);

  return (
    <ButtonChangeQuantity
      sum={sum}
      quantity={quantity}
      rest={rest}
      />
  );
};
