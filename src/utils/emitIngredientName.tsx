import { IngredientName, IngredientNames } from "../components/ingredient/Ingredient.interface";

export const emitIngredientName = (name: IngredientNames): string => {
  switch (name) {
    case IngredientName.paprika:
      return "Paprika";
    case IngredientName.pepperoni:
      return "Pepperoni";
    case IngredientName.mushrooms:
      return "Mushrooms";
    case IngredientName.onion:
      return "Onion";
    case IngredientName.red_onion:
      return "Red Onion";
    case IngredientName.tomato:
      return "Tomato";
    case IngredientName.bacon:
      return "Bacon";
  }
};
