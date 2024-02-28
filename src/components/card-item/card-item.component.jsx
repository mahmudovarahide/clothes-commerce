import { memo } from "react";
import "./card-item.style.scss";

const CardItem = memo(({ cardItem }) => {
  const { name, imageUrl, price, quantity } = cardItem;
  return (
    <div className="card-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
});
export default CardItem;
