import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-top: 15px;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 50%;
    font-size: 12px;
    opacity: 0.7;
    position: absolute;
    top: 265px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 1;
      display: flex;
      background-color: rgba(15, 23, 42, 255);
      color: #fff;
      border: none;
    }
  }
`;

export const FooterNameContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  .name {
    width: 90%;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;
export const Price = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #40cd74;
  border-radius: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  span {
    font-weight: 700;
    color: #40cd74;
    font-size: 12px;
  }
`;
export const Rewiev = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #acacac;
  font-size: 14px;
  path {
    fill: #e5b538;
  }
`;
