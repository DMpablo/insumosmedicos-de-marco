import { useState, useEffect } from "react";
import { ButtonChangeQuantity } from "../buttonChangeQuantity/buttonChangeQuantity";
import "./functioButtons.scss";

export const FunctioButtons = (props) => {
  const [quantity, setQuantity] = useState(1);
  const stock = props.stock;

  const sum = () => {
    quantity < stock ? setQuantity(quantity + 1) : console.log("no hay mas stock");;
    props.setItemsLenght(+1)
  };

  const rest = () => {
    quantity > 0 ? setQuantity(quantity - 1) : console.log("no resta mas");
    props.setItemsLenght(-1)
  };

  useEffect(() => {
    if (quantity < 0) {
      console.log("ya no se puede restar");
    }
  }, [quantity]);

 return <ButtonChangeQuantity sum={sum} quantity={quantity} rest={rest} />;

 
};

