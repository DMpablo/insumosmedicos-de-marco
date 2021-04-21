import "./productCard.scss";
import { ContainerCarrito } from "../containerCarrito/itemCount";


export const ProductCard = (props) => {
  return (
    <div className="product-card col s12 m6 xl4">
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="imagen producto" />
        </div>
        <div className="card-content">
          <p>{props.title}</p>
          <span className="card-title">{props.price}</span>
        </div>
        
         
          <ContainerCarrito />
     
      </div>
    </div>
  );
};
