import React, { FC, ReactElement, useCallback, useState, useEffect } from "react";
import PizzaWithPlateSVG from "../../../assets/SVG/pizzaWithPlate";
import SizeSelect, { SelectNode } from "./SizeSelect";
import { useAppDispatch, useAppSelector } from "../../../redux-toolkit/hooks";
import { IngredientName } from "../../../components/ingredient/Ingredient.interface";
import { IngredientProps } from "../../../redux-toolkit/reducers/ingredient";
import Button from "../../../components/button/Button";
import ICard, { PizzaSize, PizzaSizes } from "../../../components/cards/Card.interface";
import { addPizzaToCart } from "../../../redux-toolkit/reducers/cart";
import { clearIngredient } from "../../../redux-toolkit/reducers/ingredient";
import { generateString } from "../../../utils/utils.service";

const selectData: SelectNode[] = [
  {
    id: 1,
    size: PizzaSize.large.toLowerCase(),
    diameter: 50,
    price: 30
  },
  {
    id: 2,
    size: PizzaSize.medium.toLowerCase(),
    diameter: 35,
    price: 20
  },
  {
    id: 3,
    size: PizzaSize.small.toLowerCase(),
    diameter: 24,
    price: 15
  }
];

const RightCreator: FC = (): ReactElement => {
  const [ingName, setIngName] = useState<string[]>([]);
  const [sizePrice, setSizePrice] = useState<number>(0);
  const [pizzaSize, setPizzaSize] = useState<string>("");
  const { ingredient, price } = useAppSelector((state) => state.ingredients);
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const setNameIngredients = (arr: IngredientProps[]): string[] => {
    return arr.map((item: IngredientProps) => item.name);
  };

  const showPrice = (): number => {
    return price + sizePrice;
  };

  const pizza: ICard = {
    id: "price_1Np8X8EKmvcjX3nfXdXHtbMg",
    name: "Own Made Pizza",
    ingredients: setNameIngredients(ingredient),
    price: showPrice(),
    quantity: 1,
    size: pizzaSize.toUpperCase() as PizzaSizes,
    img: "https://i.ibb.co/cTRfstF/elczan-pizza-four-cheese-photo-from-top-all-width-visible-4k-ul-be410a24-b86f-4254-843e-90d3132b48af.png"
  };

  const dispatch = useAppDispatch();

  const addToCart = (el: ICard): void => {
    dispatch(addPizzaToCart(el));
    setSelectedNode(null);
    dispatch(clearIngredient());
  };

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
        <SizeSelect
          data={selectData}
          setSizePrice={setSizePrice}
          setPizzaSize={setPizzaSize}
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
        />
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
            Total: <span className="black-border">{showPrice()}$</span>
          </h3>
          <Button disabled={!sizePrice || !ingName.length} onClick={() => addToCart(pizza)}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightCreator;
