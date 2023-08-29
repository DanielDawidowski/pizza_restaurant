import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { IIngredient, IngredientName } from "./Ingredient.interface";
import { IngredientStyles } from "./IngredientStyles";
import { emitIngredientImg } from "../../utils/emitIngredientImg";
import { emitIngredientIcon } from "../../utils/emitIngredientIcon";
import { emitIngredientName } from "../../utils/emitIngredientName";

const Ingredient: FC<IIngredient> = (props): ReactElement => {
  const { name = IngredientName.paprika, price, icon = false, img, onPizza, total } = props;

  return (
    <>
      <IngredientStyles>
        <div className="ingredient">
          {name && !icon && (
            <div className="ingredient__list">
              {emitIngredientImg(name)} <h6>{emitIngredientName(name)}</h6>
            </div>
          )}
          {icon && emitIngredientIcon(name)}
        </div>
      </IngredientStyles>
    </>
  );
};

Ingredient.propTypes = {
  name: PropTypes.oneOf([
    IngredientName.paprika,
    IngredientName.pepperoni,
    IngredientName.mushrooms,
    IngredientName.onion,
    IngredientName.red_onion,
    IngredientName.tomato,
    IngredientName.bacon
  ]),
  price: PropTypes.number,
  img: PropTypes.string,
  icon: PropTypes.bool,
  onPizza: PropTypes.bool,
  total: PropTypes.number
};

export default Ingredient;
