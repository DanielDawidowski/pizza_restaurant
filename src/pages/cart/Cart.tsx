import React, { FC, ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import CardShopping from "../../components/cards/CardShopping";
import ICard, { TypeCard } from "../../components/cards/Card.interface";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { CartStyles } from "./CartStyles";
import PizzaSVG from "../../assets/SVG/pizza";
import Button from "../../components/button/Button";
import { ButtonColor } from "../../components/button/Button.interface";
import Divider from "../../components/divider/Divider";
import { DividerColor } from "../../components/divider/Divider.interface";
import { RootState } from "../../redux-toolkit/store";
import CartSVG from "../../assets/SVG/cart";
import { countTotalPriceInCart } from "../../utils/utils.service";

const Cart: FC = (): ReactElement => {
  const { items } = useAppSelector((state: RootState) => state.cart);

  const dispatch = useAppDispatch();

  console.log(items);

  return (
    <Layout>
      <CartStyles>
        <div className="cart">
          <ul className="cart__list">
            <li className="cart__list--item">
              {items && items.length === 0 && (
                <div className="cart__list--item__empty">
                  <h2>Your cart is empty</h2>
                  <CartSVG fill={"rgba(0, 0, 0, 0.7)"} />
                </div>
              )}
              {items &&
                items.map((item: ICard, i) => (
                  <CardShopping
                    key={i}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    listNumber={item.listNumber}
                    type={TypeCard.shop}
                    size={item.size}
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
                <h3 className="black-border">x{items.length}</h3>
              </div>
              <div className="cart__total--price">
                <Button color={ButtonColor.red}>
                  Price: <h3 className="yellow-border">{countTotalPriceInCart(items)} $</h3>
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
