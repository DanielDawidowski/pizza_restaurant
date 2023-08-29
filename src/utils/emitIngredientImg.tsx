import React, { ReactNode } from "react";
import Image from "../components/image/Image";
import { IngredientName, IngredientNames } from "../components/ingredient/Ingredient.interface";
import BaconImg from "../assets/Images/Ingredients/bacon.png";
import MushroomsImg from "../assets/Images/Ingredients/mushrooms.png";
import OnionImg from "../assets/Images/Ingredients/white_onion.png";
import PaprikaImg from "../assets/Images/Ingredients/paprika.png";
import PepperoniImg from "../assets/Images/Ingredients/pepperoni.png";
import RedOnionImg from "../assets/Images/Ingredients/red_onion.png";
import TomatoImg from "../assets/Images/Ingredients/tomato.png";

export const emitIngredientImg = (name: IngredientNames): ReactNode => {
  switch (name) {
    case IngredientName.paprika:
      return <Image src={PaprikaImg} alt={IngredientName.paprika} />;
    case IngredientName.pepperoni:
      return <Image src={PepperoniImg} alt={IngredientName.pepperoni} />;
    case IngredientName.mushrooms:
      return <Image src={MushroomsImg} alt={IngredientName.mushrooms} />;
    case IngredientName.onion:
      return <Image src={OnionImg} alt={IngredientName.onion} />;
    case IngredientName.red_onion:
      return <Image src={RedOnionImg} alt={IngredientName.red_onion} />;
    case IngredientName.tomato:
      return <Image src={TomatoImg} alt={IngredientName.tomato} />;
    case IngredientName.bacon:
      return <Image src={BaconImg} alt={IngredientName.bacon} />;
  }
};
