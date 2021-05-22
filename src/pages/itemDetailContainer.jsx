import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../components/itemDetail/ItemDetail";
import { CartContext } from "../context/cartContext";

export const ItemDetailContainer = ({ itemsFirebase }) => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const ItemID = itemsFirebase.find((e) => e.id === id);
 
  return (
    <div>
      {ItemID ? (
        <ItemDetail ItemID={ItemID} onAdd={() => addToCart(ItemID)} />
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};
