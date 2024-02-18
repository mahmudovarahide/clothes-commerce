import styled from "styled-components";

export const MainHomeContainer = styled.div`
  background-color: rgba(227, 255, 230, 255);
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const MainContentsContainer = styled.div`
  width: 55%;
  padding-left: 30px;
  display: flex;
  align-items: baseline;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 0;
    letter-spacing: 0.6px;
  }
  h5 {
    font-size: 55px;
    font-weight: 700;
    letter-spacing: 0.6px;
  }
  button {
    background-color: rgba(15, 23, 42, 255);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 9px 25px;
    font-weight: 600;
    width: 200px;
    letter-spacing: 0.6px;
  }
`;
export const MainImgContainer = styled.div`
  width: 45%;
  img {
    width: 100%;
  }
`;
