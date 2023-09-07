import React, { FC, ReactElement } from "react";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { NavStyles } from "./NavigationStyles";
import Hamburger from "../hamburger/Hamburger";
import Logo from "../../../assets/SVG/Logo";
import { useAppSelector } from "../../../redux-toolkit/hooks";
import IHamburger from "../hamburger/Hamburger.interface";
import { Link } from "react-router-dom";
import BasketSVG from "../../../assets/SVG/basket";
import ListSVG from "../../../assets/SVG/list";
import PizzaSVG from "../../../assets/SVG/pizza";

const Navigation: FC<IHamburger> = (props): ReactElement => {
  const { items } = useAppSelector((state) => state.cart);
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
            className="nav"
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
                    <div className="nav__cart">
                      <div className="nav__cart--icon">
                        <BasketSVG />
                        {items.length !== 0 ? <span>{items.length}</span> : null}
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Hamburger setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} close />
                </li>
              </ul>
            </nav>
            <div className="nav__body">
              <ul>
                <li>
                  <Link to="/menu">
                    <span>
                      <ListSVG />
                    </span>
                    <h3>Menu List</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/create-pizza">
                    <span>
                      <PizzaSVG />
                    </span>
                    <h3>Pizza Creator</h3>
                  </Link>
                </li>
              </ul>
            </div>
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
