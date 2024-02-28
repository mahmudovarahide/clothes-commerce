import { useNavigate } from "react-router-dom";
import {
  Body,
  DirectoryItemContainer,
  TextContainer,
} from "./directory.style.jsx";
import { useCallback } from "react";

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const navigateHandler = useCallback(() => navigate(route),[]);
  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      <Body>
        <TextContainer>
          <h2>{title}</h2>
          <p>Shop now</p>
        </TextContainer>
        <img src={imageUrl} alt="" />
      </Body>
    </DirectoryItemContainer>
  );
};
export default CategoryItem;
