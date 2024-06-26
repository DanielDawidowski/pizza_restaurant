export enum CardColor {
  primary = "PRIMARY",
  secondary = "SECONDARY",
  red = "RED"
}

export enum PizzaSize {
  small = "SMALL",
  medium = "MEDIUM",
  large = "LARGE"
}

export enum TypeCard {
  discount = "DISCOUNT",
  list = "LIST",
  shop = "SHOP"
}

export enum PizzaKind {
  popular = "POPULAR",
  vege = "VEGETARIAN",
  spicy = "SPICY"
}

export type CardColors = CardColor.primary | CardColor.secondary | CardColor.red;

export type PizzaSizes = PizzaSize.small | PizzaSize.medium | PizzaSize.large;

export type TypeCards = TypeCard.discount | TypeCard.list | TypeCard.shop;

export type PizzaKinds = PizzaKind.popular | PizzaKind.vege | PizzaKind.spicy;

export default interface ICard {
  id?: string;
  name?: string;
  listNumber?: number;
  quantity?: number;
  ingredients?: string[];
  price?: number;
  size?: string;
  title?: string;
  kind?: string;
  img?: string;
  type?: TypeCards;
}
