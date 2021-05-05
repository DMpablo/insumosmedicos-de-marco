import { FunctioButtons } from "../functioButtons/functioButtons";
import "../itemDetail/ItemDetail.scss";

export const ItemDetail = ({ ItemID }) => {
  return (
    <div className="item_detail_container">
      <img src={ItemID.picture} alt={ItemID.title} />
      <div className="item_detail">
        <p className="title_detail">{ItemID.title}</p>
        <p className="price_detail">{ItemID?.price?.amount}</p>
        <div className='function_buttons'>
          <FunctioButtons />
        </div>
      </div>
    </div>
  );
};
