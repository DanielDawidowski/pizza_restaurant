import React, { FC, ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import MenuImg from "../../assets/Images/menu-hero.png";
import Image from "../../components/image/Image";
import { MenuStyles } from "./MenuStyles";
import Divider from "../../components/divider/Divider";
import { DividerColor } from "../../components/divider/Divider.interface";
import CardDiscount from "../../components/cards/CardDiscount";
import data from "../../data.json";
import ICard, { TypeCard } from "../../components/cards/Card.interface";
import Card from "../../components/cards/Card";
import { generateString } from "../../utils/utils.service";

const Menu: FC = (): ReactElement => {
  return (
    <Layout>
      <MenuStyles>
        <div className="menu__image">
          <Image src={MenuImg} alt={MenuImg} />
          <div className="menu__image--line"></div>
        </div>
        <Divider color={DividerColor.primary}>Deals</Divider>
        <div className="menu__discount">
          {data &&
            data
              .slice(0, 2)
              .sort(() => 0.5 - Math.random())
              .map((item: ICard, i) => (
                <CardDiscount key={i} img={item.img} type={TypeCard.discount} price={item.price} />
              ))}
        </div>
        <Divider color={DividerColor.primary}>Menu</Divider>
        <div className="menu__list">
          {data &&
            data.map((item: ICard, i) => (
              <Card
                key={i}
                id={item.id}
                name={item.name}
                listNumber={item.listNumber}
                img={item.img}
                price={item.price}
                ingredients={item.ingredients}
                type={TypeCard.list}
                kind={item.kind}
              />
            ))}
        </div>
      </MenuStyles>
    </Layout>
  );
};

export default Menu;
