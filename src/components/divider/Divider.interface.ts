export enum DividerColor {
  primary = "PRIMARY",
  secondary = "SECONDARY"
}

export type DividerTypes = DividerColor.primary | DividerColor.secondary;

export default interface IDivider {
  children?: React.ReactNode;
  color: DividerTypes;
}
