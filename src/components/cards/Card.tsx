import React, { ChangeEvent, FC, ReactElement, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { TypeCard } from "./Card.interface";
import ICard from "./Card.interface";
import { CardStyles } from "./CardStyles";
import Image from "../image/Image";
import DotsSVG from "../../assets/SVG/dots";
import QoutesSVG from "../../assets/SVG/qoutes";
import CartSVG from "../../assets/SVG/cart";
import PepperSVG from "../../assets/SVG/pepper";
import StarSVG from "../../assets/SVG/star";
import VegeSVG from "../../assets/SVG/vege";
import { useAppDispatch } from "../../redux-toolkit/hooks";
import { addPizzaToCart } from "../../redux-toolkit/reducers/cart";
import { generateString } from "../../utils/utils.service";

const Card: FC<ICard> = (props): ReactElement => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [red, setRed] = useState<boolean>(false);
  const [id, setId] = useState<string>(generateString(10));
  const [size, setSize] = useState<string>("");

  const { name, listNumber, ingredients, kind, img, type, price } = props;

  const item: ICard = {
    id,
    name,
    listNumber,
    ingredients,
    kind,
    img,
    size,
    price
  };

  const dispatch = useAppDispatch();

  const addToCart = (el: ICard): void => {
    if (toggle && !size) {
      setRed(true);
    } else {
      dispatch(addPizzaToCart(el));
      setId(generateString(10));
      setToggle(false);
      setSize("");
    }
  };

  const handleToggle = (): void => {
    setToggle(true);
  };

  const handleSize = (e: ChangeEvent<HTMLInputElement>): void => {
    setSize(e.target.id);
    setRed(e.target.id ? false : true);
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
          <div className="qoutes">
            <QoutesSVG />
          </div>
          <div className="card__body--ingredients">
            {ingredients && ingredients.map((el, i) => <h6 key={i}>{el},</h6>)}
          </div>
          <AnimatePresence>
            {toggle && (
              <motion.div
                className="card__body--select"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: toggle ? 100 : 0, opacity: 1, transition: { duration: 0.8 } }}
                exit={{ height: !toggle ? 100 : 0, opacity: 0, transition: { duration: 0.5 } }}
              >
                <motion.div
                  className="card__body--select--item"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1.4 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  style={{ borderColor: red ? "red" : "black", color: red ? "red" : "black" }}
                >
                  <input id="small" name="size" type="radio" onChange={handleSize} />
                  <label htmlFor="small">Small {price}$</label>
                </motion.div>
                <motion.div
                  className="card__body--select--item"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1.4 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  style={{ borderColor: red ? "red" : "black", color: red ? "red" : "black" }}
                >
                  <input id="medium" name="size" type="radio" onChange={handleSize} />
                  <label htmlFor="medium">Medium {((price as number) + 4).toFixed(2)}$</label>
                </motion.div>
                <motion.div
                  className="card__body--select--item"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1.4 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  style={{ borderColor: red ? "red" : "black", color: red ? "red" : "black" }}
                >
                  <input id="large" name="size" type="radio" onChange={handleSize} />
                  <label htmlFor="large">Large {((price as number) + 8).toFixed(2)}$</label>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="card__body--footer">
            {!toggle ? (
              <div className="card__body--footer--btn" onClick={() => handleToggle()}>
                <CartSVG />
              </div>
            ) : (
              <div className="card__body--footer--btn" onClick={() => addToCart(item)}>
                <CartSVG />
              </div>
            )}

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
  id: PropTypes.string,
  name: PropTypes.string,
  listNumber: PropTypes.number,
  ingredients: PropTypes.array,
  price: PropTypes.number,
  size: PropTypes.string,
  img: PropTypes.string,
  kind: PropTypes.string,
  type: PropTypes.oneOf([TypeCard.discount, TypeCard.list, TypeCard.shop])
};

export default Card;
