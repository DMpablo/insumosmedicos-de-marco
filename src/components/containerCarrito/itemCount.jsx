import { useState, useEffect } from "react";
import "./itemCount.scss";


export const ContainerCarrito = () => {
  const [contador, setContador] = useState(1);

  const suma = () => {
    setContador(contador + 1);
  };

  const resta = () => {
    setContador(contador - 1);
  };
  
  useEffect(() => {
    if (contador <= -1) {
      alert("ya no se puede restar");
    }
  }, [contador]);

  return (
    <div className="container-carrito">
      <div className="container_add_poduct">
        <button className="add_product btn" onClick={suma}>agregar al carrito</button>
      </div>

      <div className="container_quantity">
        
        <a class="btn" onClick={suma}>
          <i class="material-icons">+</i>
        </a>
        <p>{contador}</p>
        <a class="btn" onClick={resta}>
          <i class="material-icons">-</i>
        </a>
      </div>
    </div>
  );
};
