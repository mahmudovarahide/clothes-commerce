import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
export const Body = styled.div`
  padding: 0 25px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    white-space: nowrap;
  }
`;
export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  background-color: rgba(248, 250, 252, 255);
  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
`;
