import { ContainerGreeting } from "../components/containerGreeting/containerGreeting";
import CategoryContainer from "./CategoryContainer"; 


export const ItemListContainer = () => {
  const GREETING = ["insumos", "medicos"];
  return (
    <div className="item_list_container">
      <div>
        <ContainerGreeting name={GREETING} />
      </div>
      <div className="row">
        <CategoryContainer />
      </div>
    </div>
  );
};
