import React, { FC, ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import CardShopping from "../../components/cards/CardShopping";
import ICard, { PizzaSize, TypeCard } from "../../components/cards/Card.interface";

import data from "../../data.json";
import { CartStyles } from "./CartStyles";
import PizzaSVG from "../../assets/SVG/pizza";
import Button from "../../components/button/Button";
import { ButtonColor } from "../../components/button/Button.interface";
import Divider from "../../components/divider/Divider";
import { DividerColor } from "../../components/divider/Divider.interface";

const Cart: FC = (): ReactElement => {
  return (
    <Layout>
      <CartStyles>
        <div className="cart">
          <ul className="cart__list">
            <li className="cart__list--item">
              {data &&
                data.map((item: ICard, i) => (
                  <CardShopping
                    key={i}
                    img={item.img}
                    name={item.name}
                    type={TypeCard.shop}
                    size={PizzaSize.small}
                    ingredients={item.ingredients}
                    kind={item.kind}
                    price={item.price}
                  />
                ))}
            </li>
            <Divider color={DividerColor.primary}>Total</Divider>
            <div className="cart__total">
              <div className="cart__total--pizza">
                <PizzaSVG fill="#333333" />
                <h3 className="black-border">x6</h3>
              </div>
              <div className="cart__total--price">
                <Button color={ButtonColor.red}>
                  Price: <h3 className="yellow-border">80 $</h3>
                </Button>
              </div>
            </div>
          </ul>
        </div>
      </CartStyles>
    </Layout>
  );
};

export default Cart;
