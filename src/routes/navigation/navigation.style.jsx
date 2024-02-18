import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
`;

export const LogoContaoiner = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavigationLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: rgba(15, 23, 42, 255);
  font-weight: 500;
  letter-spacing: 0.6px;
  font-size: 13px;
`;
