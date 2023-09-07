import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import ICard from "./Card.interface";
import { TypeCard } from "./Card.interface";
import Image from "../image/Image";
import { CardStyles } from "./CardStyles";
import BinSVG from "../../assets/SVG/bin";
import CheckSVG from "../../assets/SVG/check";
import VegeSVG from "../../assets/SVG/vege";
import StarSVG from "../../assets/SVG/star";
import PepperSVG from "../../assets/SVG/pepper";
import Button from "../button/Button";
import { ButtonColor } from "../button/Button.interface";
import { useAppDispatch } from "../../redux-toolkit/hooks";
import { removePizzaFromCart } from "../../redux-toolkit/reducers/cart";
import { emitPizzaSize } from "../../utils/emitPizzaSize";

const CardShopping: FC<ICard> = (props): ReactElement => {
  const { name, size, price, id, ingredients, kind, img, type } = props;

  const dispatch = useAppDispatch();

  return (
    <CardStyles type={type}>
      <div className="card__left">
        <div className="card__left--ribbon"></div>
        <div className="card__left--image">
          <Image src={img} alt={img} />
        </div>
      </div>
      <div className="card__right">
        <div className="card__right--header">
          <div className="card__right--header__title">
            <h4>{name}</h4>
            <h5>
              {size?.toUpperCase()} - {emitPizzaSize(size?.toLowerCase() as string)}
            </h5>
          </div>

          <div className="card__right--header__bin" onClick={() => dispatch(removePizzaFromCart(id as string))}>
            <BinSVG />
          </div>
        </div>
        <div className="card__right--content">
          {ingredients &&
            ingredients.map((item, i) => (
              <div key={i} className="card__right--content__ingredients">
                <CheckSVG />
                <h6>{item}</h6>
              </div>
            ))}
        </div>
        <div className="card__right--footer">
          <div className="card__right--footer--content">
            {kind === "vege" && (
              <div className="card__right--footer--kind">
                <span className="green-border">Vege</span>
                <VegeSVG />
              </div>
            )}
            {kind === "popular" && (
              <div className="card__right--footer--kind">
                <span className="red-border">Popular</span>
                <StarSVG />
              </div>
            )}
            {kind === "spicy" && (
              <div className="card__right--footer--kind">
                <span className="yellow-border-red">Spicy</span>
                <PepperSVG />
              </div>
            )}
            <Button color={ButtonColor.secondary} disabled>
              {price} $
            </Button>
          </div>
        </div>
      </div>
    </CardStyles>
  );
};

CardShopping.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  ingredients: PropTypes.array,
  price: PropTypes.number,
  listNumber: PropTypes.number,
  size: PropTypes.string,
  img: PropTypes.string,
  kind: PropTypes.string,
  type: PropTypes.oneOf([TypeCard.discount, TypeCard.list, TypeCard.shop])
};

export default CardShopping;
