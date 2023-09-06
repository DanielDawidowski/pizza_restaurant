export enum IngredientName {
  paprika = "PAPRIKA",
  pepperoni = "PEPPERONI",
  mushrooms = "MUSHROOMS",
  onion = "ONION",
  red_onion = "RED_ONION",
  tomato = "TOMATO",
  bacon = "BACON"
}

export type IngredientNames =
  | IngredientName.paprika
  | IngredientName.pepperoni
  | IngredientName.mushrooms
  | IngredientName.onion
  | IngredientName.red_onion
  | IngredientName.tomato
  | IngredientName.bacon;

export interface IIngredient {
  name?: IngredientNames;
  img?: string;
  icon?: boolean;
}
