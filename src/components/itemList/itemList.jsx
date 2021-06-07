import React from "react";
import "./itemList.scss";
import { useParams } from "react-router-dom";
import { Item } from "../item/item";

export const ItemList = ({ itemsFirebase }) => {
  const { catName } = useParams();
  const newCat = itemsFirebase.filter((i) => i.category === catName);

  return (
    <div className="container_item_list">
      {newCat === undefined ? (
        <h4 className="cargando-datos">Cargando datos</h4>
      ) : (
        <div className="container-items">
          {newCat.map((e, index) => <Item key={index} newCat={e} />)}
        </div>
      )}
    </div>
  );
};
