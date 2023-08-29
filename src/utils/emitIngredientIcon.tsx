import React, { ReactNode } from "react";
import { IngredientName, IngredientNames } from "../components/ingredient/Ingredient.interface";
import PaprikaSVG from "../assets/SVG/Ingredients/paprika";
import PepperoniSVG from "../assets/SVG/Ingredients/pepperoni";
import MushroomSVG from "../assets/SVG/Ingredients/mushroom";
import OnionSVG from "../assets/SVG/Ingredients/onion";
import TomatoSVG from "../assets/SVG/Ingredients/tomato";
import BaconSVG from "../assets/SVG/Ingredients/bacon";

export const emitIngredientIcon = (name: IngredientNames): ReactNode => {
  switch (name) {
    case IngredientName.paprika:
      return <PaprikaSVG />;
    case IngredientName.pepperoni:
      return <PepperoniSVG />;
    case IngredientName.mushrooms:
      return <MushroomSVG />;
    case IngredientName.onion:
      return <OnionSVG />;
    case IngredientName.red_onion:
      return <OnionSVG red />;
    case IngredientName.tomato:
      return <TomatoSVG />;
    case IngredientName.bacon:
      return <BaconSVG />;
  }
};
