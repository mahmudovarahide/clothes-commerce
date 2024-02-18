import "./checkout.style.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCardItems,
  selectCardTotal,
} from "../../store/card/card.selector";

const Checkout = () => {
  const cardItems = useSelector(selectCardItems);
  const cardTotal = useSelector(selectCardTotal);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Decription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cardItems.map((cardItem) => (
        <CheckoutItem key={cardItem.id} cardItem={cardItem} />
      ))}
      <span className="total">Total : ${cardTotal}</span>
    </div>
  );
};
export default Checkout;
