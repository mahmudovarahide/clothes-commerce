import Button from "../button/button.component";
import CardItem from "../card-item/card-item.component";
import { useNavigate } from "react-router-dom";
import {
  CardDropdownContainer,
  EmptyMessage,
  CardItems,
} from "./card-dropdown.style.jsx";
import { useSelector } from "react-redux";
import { selectCardItems } from "../../store/card/card.selector.js";

const CardDropdown = () => {
  const cardItems = useSelector(selectCardItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CardDropdownContainer>
      <CardItems>
        {cardItems.length ? (
          cardItems.map((item) => <CardItem key={item.id} cardItem={item} />)
        ) : (
          <EmptyMessage>Your card is empty</EmptyMessage>
        )}
      </CardItems>
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </CardDropdownContainer>
  );
};
export default CardDropdown;
