import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { TypeCard } from "./Card.interface";
import { CardStyles } from "./CardStyles";
import Image from "../image/Image";
import { ButtonColor } from "../button/Button.interface";
import Button from "../button/Button";
import ICardDiscount from "./Card.interface";

const CardDiscount: FC<ICardDiscount> = (props): ReactElement => {
  const { name, listNumber, price, img, title, type } = props;

  return (
    <CardStyles type={type}>
      <div className="card__header">
        <h2>{name}</h2>
        <h2>{listNumber}</h2>
      </div>
      <div className="card__body">
        <div className="card__body--image">
          <Image src={img} alt={img} />
        </div>
        <div className="card__body--content">
          <Button color={ButtonColor.secondary} disabled>
            {price} $
          </Button>
          <h4 className="black-border">{title}</h4>
          <h5>
            <span className="black-border">small </span>
            <span className="yellow-border">24 cm</span>
          </h5>
        </div>
      </div>
    </CardStyles>
  );
};

CardDiscount.propTypes = {
  name: PropTypes.string,
  listNumber: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.oneOf([TypeCard.discount, TypeCard.list, TypeCard.shop])
};

export default CardDiscount;
