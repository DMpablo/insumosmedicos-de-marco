import { ItemList } from "../components/itemList/itemList";
import { ContainerGreeting } from "../components/containerGreeting/containerGreeting";


export const ItemListContainer = () => {

  const GREETING = ["insumos", "medicos"];
  return (

    <div className="item_list_container">
     <div>
      <ContainerGreeting name={GREETING} />
    </div>
      <div className="row">
        <ItemList />
      </div>
    </div>
  );
};
