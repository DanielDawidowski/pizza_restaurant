import React, { FC, ReactElement, useCallback, useState, useEffect } from "react";
import PizzaWithPlateSVG from "../../../assets/SVG/pizzaWithPlate";
import SizeSelect, { SelectNode } from "./SizeSelect";
import { useAppSelector } from "../../../redux-toolkit/hooks";
import { IngredientName } from "../../../components/ingredient/Ingredient.interface";
import { IngredientProps } from "../../../redux-toolkit/reducers/ingredient";
import CartSVG from "../../../assets/SVG/cart";
import Button from "../../../components/button/Button";

const selectData: SelectNode[] = [
  {
    id: 1,
    size: "large",
    diameter: 50,
    price: 30
  },
  {
    id: 2,
    size: "medium",
    diameter: 35,
    price: 20
  },
  {
    id: 3,
    size: "small",
    diameter: 24,
    price: 15
  }
];

const RightCreator: FC = (): ReactElement => {
  const [ingName, setIngName] = useState<string[]>([]);
  const [sizePrice, setSizePrice] = useState<number>(0);
  const { ingredient, price } = useAppSelector((state) => state.ingredients);

  const showIngredient = useCallback((): void => {
    const list: string[] = [];
    ingredient.forEach((item: IngredientProps) => {
      if (item.count > 0) {
        list.push(item.name);
      } else {
        const index = list.indexOf(item.name);
        if (index !== -1) {
          list.splice(index, 1);
        }
      }
    });
    setIngName(list);
  }, [ingredient]);

  useEffect(() => {
    showIngredient();
  }, [showIngredient]);

  return (
    <div className="creator__right">
      <div className="creator__right--inner">
        <SizeSelect data={selectData} setSizePrice={setSizePrice} />
        <div className="creator__right--pizza">
          <PizzaWithPlateSVG
            tomato={ingName.includes(IngredientName.tomato)}
            mushrooms={ingName.includes(IngredientName.mushrooms)}
            paprika={ingName.includes(IngredientName.paprika)}
            pepperoni={ingName.includes(IngredientName.pepperoni)}
            onion={ingName.includes(IngredientName.onion)}
            red_onion={ingName.includes(IngredientName.red_onion)}
            bacon={ingName.includes(IngredientName.bacon)}
          />
        </div>
        <div className="creator__right--total">
          <h3>
            Total: <span className="black-border">{price + sizePrice}$</span>
          </h3>
          <Button disabled={!sizePrice || !ingName.length}>+</Button>
        </div>
      </div>
    </div>
  );
};

export default RightCreator;
