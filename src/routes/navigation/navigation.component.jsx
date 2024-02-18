import { Link, Outlet } from "react-router-dom";
import "./navigation.style.jsx";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";
import {
  LogoContaoiner,
  NavigationContainer,
  NavigationLinksContainer,
  NavLink,
} from "./navigation.style.jsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { selectIsCardOpen } from "../../store/card/card.selector.js";

const Navigation = () => {
  const isCardOpen = useSelector(selectIsCardOpen);
  const currentUser = useSelector(selectCurrentUser);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <div className="container">
      <NavigationContainer>
        <LogoContaoiner to="/">
          <Logo className="logo" />
        </LogoContaoiner>
        <NavigationLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN </NavLink>
          )}
          <CardIcon />
        </NavigationLinksContainer>
        {isCardOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </div>
  );
};

export default Navigation;
