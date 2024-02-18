import {
  addItemToCard,
  clearItemFromCard,
  removeItemFromCard,
} from "../../store/card/card.reducer";
import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";

const CheckoutItem = ({ cardItem }) => {
  const dispatch = useDispatch();
  const { name, quantity, price, imageUrl } = cardItem;

  const addItemHandler = () => dispatch(addItemToCard(cardItem));
  const removeItemToCardHandler = () => dispatch(removeItemFromCard(cardItem));
  const clearItem = () => dispatch(clearItemFromCard(cardItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="arrow" onClick={removeItemToCardHandler}>
        &#10094;
      </div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={addItemHandler}>
        &#10095;
      </div>
      <span className="price">{price}</span>
      <div onClick={clearItem} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
