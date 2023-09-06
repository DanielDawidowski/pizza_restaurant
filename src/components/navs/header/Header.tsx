import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux-toolkit/hooks";
import Logo from "../../../assets/SVG/Logo";
import { HeaderStyles } from "./HeaderStyles";
import BasketSVG from "../../../assets/SVG/basket";
import Hamburger from "../hamburger/Hamburger";
import IHamburger from "../hamburger/Hamburger.interface";

const Header: FC<IHamburger> = (props): ReactElement => {
  const { items } = useAppSelector((state) => state.cart);

  const { toggleMenu, setToggleMenu } = props;

  return (
    <HeaderStyles>
      <nav className="container">
        <div className="header__logo">
          <Link to="/">
            <Logo />
            <h2>Pizza</h2>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/cart">
              <div className="header__cart">
                <div className="header__cart--icon">
                  <BasketSVG />
                  {items.length !== 0 ? <span>{items.length}</span> : null}
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Hamburger setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired
};

export default Header;
