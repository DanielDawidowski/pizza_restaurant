import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import Header from "../header/Header";
import ILayout from "./Layout.interface";

const Layout: FC<ILayout> = ({ children }): ReactElement => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
