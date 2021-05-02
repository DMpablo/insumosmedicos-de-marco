import { FunctioButtons } from "../functioButtons/functioButtons";
import "../itemDetail/ItemDetail.scss";

export const ItemDetail = ({ title, picture  }) => {
  return (
    <div className="item_detail_container">
      <img src={picture} alt={title} />
      <div className='item_detail'>
        <p className='title_detail'>{title}</p>
        <p className='price_detail'>999</p>
        <FunctioButtons />
      </div>
    </div>
  );
};
