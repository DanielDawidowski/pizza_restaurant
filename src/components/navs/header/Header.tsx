import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../../../assets/SVG/Logo";
import { HeaderStyles } from "./HeaderStyles";
import BasketSVG from "../../../assets/SVG/basket";
import Hamburger from "../hamburger/Hamburger";
import IHamburger from "../hamburger/Hamburger.interface";

const Header: FC<IHamburger> = (props): ReactElement => {
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
              <BasketSVG />
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
