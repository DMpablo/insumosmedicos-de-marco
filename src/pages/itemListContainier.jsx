import { ContainerGreeting } from "../components/containerGreeting/containerGreeting";
import CategoryContainer from "../pages/CategoryContainer";

export const ItemListContainer = () => {
  return (
    <div className="item_list_container">
      <ContainerGreeting />
      <CategoryContainer path="/category" />
    </div>
  );
};
