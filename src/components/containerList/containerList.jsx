import { List } from "../list/list";

export const ContainierList = ({ productList }) => {
  return (
    <div className="container-list">
      <div className="row">
        <List productLista={productList} />
      </div>
    </div>
  );
};
