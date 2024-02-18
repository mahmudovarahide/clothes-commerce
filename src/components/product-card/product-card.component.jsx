import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCardItems } from "../../store/card/card.selector";
import { addItemToCard } from "../../store/card/card.reducer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ProductCardContainer,
  FooterNameContainer,
  FooterInfo,
  Rewiev,
  Price,
} from "./product-card.style.jsx";

const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;

  const dispatch = useDispatch();
  const cardItems = useSelector(selectCardItems);

  const addProductToCard = () => dispatch(addItemToCard(cardItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt="" />
      <FooterNameContainer>
        <span className="name">{name}</span>
      </FooterNameContainer>
      <FooterInfo>
        <Price>
          <span>${price}</span>
        </Price>
        <Rewiev>
          <FontAwesomeIcon icon={faStar} />
          4.9 (98 reviews)
        </Rewiev>
      </FooterInfo>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCard}
      >
        Add to Card
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
