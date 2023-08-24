import React, { FC, ReactElement, useState } from "react";
import PropTypes from "prop-types";
import { PizzaSize, TypeCard } from "./Card.interface";
import ICard from "./Card.interface";
import { CardStyles } from "./CardStyles";
import Image from "../image/Image";
import DotsSVG from "../../assets/SVG/dots";
import QoutesSVG from "../../assets/SVG/qoutes";
import EyeSVG from "../../assets/SVG/eye";
import CartSVG from "../../assets/SVG/cart";
import PepperSVG from "../../assets/SVG/pepper";
import StarSVG from "../../assets/SVG/star";
import VegeSVG from "../../assets/SVG/vege";

const Card: FC<ICard> = (props): ReactElement => {
  const [toggle, setToggle] = useState(false);
  const { name, listNumber, ingredients, price, size, kind, img, type } = props;

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  return (
    <CardStyles type={type}>
      <div className="card__header">
        <h2 className="white-border">{name}</h2>
        <h2>#{listNumber}</h2>
      </div>
      <div className="card__body">
        <div className="card__body--image">
          <Image src={img} alt={img} />
          <DotsSVG />
        </div>
        <div className="card__body--discription">
          <QoutesSVG />
          <div className="card__body--ingredients">
            {ingredients && ingredients.map((item, i) => <h6 key={i}>{item},</h6>)}
          </div>
          {toggle && (
            <div className="card__body--select">
              <div className="card__body--select--item">
                <input id="small" name="size" type="radio" />
                <label htmlFor="small">Small</label>
              </div>
              <div className="card__body--select--item">
                <input id="medium" name="size" type="radio" />
                <label htmlFor="medium">Medium</label>
              </div>
              <div className="card__body--select--item">
                <input id="large" name="size" type="radio" />
                <label htmlFor="large">Large</label>
              </div>
            </div>
          )}
          <div className="card__body--footer" onClick={handleToggle}>
            <div className="card__body--footer--btn">{toggle ? <CartSVG /> : <EyeSVG />}</div>
            {kind === "vege" && (
              <div className="card__body--footer--kind">
                <span className="green-border">Vege</span>

                <VegeSVG />
              </div>
            )}
            {kind === "popular" && (
              <div className="card__body--footer--kind">
                <span className="red-border">Popular</span>
                <StarSVG />
              </div>
            )}
            {kind === "spicy" && (
              <div className="card__body--footer--kind">
                <span className="yellow-border-red">Spicy</span>
                <PepperSVG />
              </div>
            )}
          </div>
        </div>
      </div>
    </CardStyles>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  listNumber: PropTypes.number,
  ingredients: PropTypes.array,
  price: PropTypes.number,
  size: PropTypes.oneOf([PizzaSize.small, PizzaSize.medium, PizzaSize.large]),
  img: PropTypes.string,
  kind: PropTypes.string,
  type: PropTypes.oneOf([TypeCard.discount, TypeCard.list, TypeCard.shop])
};

export default Card;
