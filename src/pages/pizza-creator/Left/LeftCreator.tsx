import React, { FC, ReactElement } from "react";
import Ingredient from "../../../components/ingredient/Ingredient";
import { IngredientName } from "../../../components/ingredient/Ingredient.interface";
import { useAppDispatch, useAppSelector } from "../../../redux-toolkit/hooks";
import { increment, decrement, IngredientProps } from "../../../redux-toolkit/reducers/ingredient";

const LeftCreator: FC = (): ReactElement => {
  const { total, ingredient } = useAppSelector((state) => state.ingredients);

  const dispatch = useAppDispatch();

  const ingredientsNames = Object.values(IngredientName);

  const incrementIngredient = (ingredientName: string): void => {
    dispatch(increment(ingredientName));
  };

  const decrementIngredient = (ingredientName: string): void => {
    dispatch(decrement(ingredientName));
  };

  const showButtons = (arr: IngredientProps[], name: string): ReactElement => {
    let count = 0;
    let disabled = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
        count = arr[i].count;
      }
      if (count > 1) {
        disabled = true;
      }
    }

    return (
      <>
        {disabled ? <li className="disabled">+</li> : <li onClick={() => incrementIngredient(name)}>+</li>}
        <li>{count === 0 ? "0" : `${count}x`}</li>
        <li onClick={() => decrementIngredient(name)}>-</li>
      </>
    );
  };

  return (
    <div className="creator__left">
      <div className="creator__left--info">
        <h6>
          You have total {total}x ingredient{total === 1 ? "" : "s"}
        </h6>
      </div>
      <ul className="creator__left--ingredients">
        {ingredientsNames.map((ingredientName) => (
          <li className="creator__left--ingredients__item" key={ingredientName}>
            <div className="creator__left--ingredients__item--top">
              <Ingredient name={ingredientName} />
            </div>
            <ul className="creator__left--ingredients__item--bottom">{showButtons(ingredient, ingredientName)}</ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftCreator;
