import React, { FC, ReactElement } from "react";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { NavStyles } from "./NavigationStyles";
import Hamburger from "../hamburger/Hamburger";
import Logo from "../../../assets/SVG/Logo";

import IHamburger from "../hamburger/Hamburger.interface";
import { Link } from "react-router-dom";
import BasketSVG from "../../../assets/SVG/basket";

const Navigation: FC<IHamburger> = (props): ReactElement => {
  const { toggleMenu, setToggleMenu } = props;
  return (
    <AnimatePresence>
      {toggleMenu && (
        <>
          <NavStyles
            initial={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0.6, 0.05, -0.01, 0.9]
            }}
            exit={{ x: "-100%" }}
          >
            <nav>
              <div className="nav__logo">
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
                  <Hamburger setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} close />
                </li>
              </ul>
            </nav>
          </NavStyles>
        </>
      )}
    </AnimatePresence>
  );
};

Navigation.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired
};

export default Navigation;