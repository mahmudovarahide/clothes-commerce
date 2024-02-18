import styled from "styled-components";
import { ReactComponent as ShoppingSVG } from "../../assets/images/shopping-bag.svg";

export const CardIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingCard = styled(ShoppingSVG)`
  width: 24px;
  height: 24px;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  z-index: -1;
`;
