import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  letter-spacing: 0.5px;
  padding: 10px 30px;
  font-size: 12px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: rgba(15, 23, 42, 255);
  border-radius: 50px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
