import React, { FC, ReactElement, useState } from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Header from "../navs/header/Header";
import ILayout from "./Layout.interface";
import { globalStyles } from "../styles/variables";
import { LayoutStyles } from "./LayoutStyles";
import { GlobalStyles } from "../styles/globalStyles";
import { TypographyStyles } from "../styles/typographyStyles";
import Navigation from "../navs/navigation/Navigation";

const Layout: FC<ILayout> = ({ children }): ReactElement => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <ThemeProvider theme={globalStyles}>
      <GlobalStyles />
      <TypographyStyles />
      <LayoutStyles>
        <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <main>{children}</main>
      </LayoutStyles>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
