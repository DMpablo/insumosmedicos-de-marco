import { ItemList } from "../itemList/itemList";
import "./itemListContainer.scss";

export const ItemListContainer = ({ setItemsLenght }) => {
  return (
    <div className="item_list_container">
      <div className="row">
        <ItemList setItemsLenght={setItemsLenght} />
      </div>
    </div>
  );
};
