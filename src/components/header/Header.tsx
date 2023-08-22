import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const Header: FC = (): ReactElement => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/create-pizza">Create Pizza</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
