import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../components/itemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { catName } = useParams();
  const [ItemID, setItemID] = React.useState([]);

  React.useEffect(() => {
    const obtenerDatos = async () => {
      const response = await fetch(
        `http://challenge-meli-backend.herokuapp.com/api/items?q=${catName}`
      );
      const products = await response.json();
      const itemId = products.items.find((i) => (i.id = { id }));
      setItemID(itemId);
    };
    obtenerDatos();
  }, [id]);
  console.log(ItemID.id);

  return (
    <div>
      {ItemID ? <ItemDetail ItemID={ItemID} /> : <p>Cargando datos...</p>}
    </div>
  );
};
