import React, { FC, ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import MenuImg from "../../assets/Images/menu-hero.png";
import Image from "../../components/image/Image";
import { MenuStyles } from "./MenuStyles";
import Divider from "../../components/divider/Divider";
import { DividerColor } from "../../components/divider/Divider.interface";

const Menu: FC = (): ReactElement => {
  return (
    <Layout>
      <MenuStyles>
        <div className="menu__image">
          <Image src={MenuImg} alt={MenuImg} />
        </div>
        <Divider color={DividerColor.primary}>Deals</Divider>
      </MenuStyles>
    </Layout>
  );
};

export default Menu;
