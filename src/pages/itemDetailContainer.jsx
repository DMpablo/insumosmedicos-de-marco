import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../components/itemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [Items, setItems] = React.useState([]);

  React.useEffect(() => {
    const obtenerDatos = async () => {
      const response = await fetch(
        "http://challenge-meli-backend.herokuapp.com/api/items?q=barbijo"
      );
      const products = await response.json();
      const itemId = products.items.find((i) => (i.id = { id }));
      setItems(itemId);
    };
    obtenerDatos();
  }, [id]);
console.log(Items);
  return (
    <div >
      <ItemDetail
        title={Items.title}
        id={Items.id}
        picture={Items.picture}
       
      />
    </div>
  );
};
