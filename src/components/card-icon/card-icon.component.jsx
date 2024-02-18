import React from "react";
import "./card-icon.style.jsx";
import {
  CardIconContainer,
  ShoppingCard,
  ItemCount,
} from "./card-icon.style.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCardCount,
  selectIsCardOpen,
} from "../../store/card/card.selector.js";
import { setIsCardOpen } from "../../store/card/card.reducer.js";

const CardIcon = () => {
  const dispatch = useDispatch();
  const isCardOpen = useSelector(selectIsCardOpen);
  const cardCount = useSelector(selectCardCount);

  const toggleCrdDropdown = () => dispatch(setIsCardOpen(!isCardOpen));

  return (
    <CardIconContainer onClick={toggleCrdDropdown}>
      <ShoppingCard />
      <ItemCount>{cardCount}</ItemCount>
    </CardIconContainer>
  );
};
export default CardIcon;
