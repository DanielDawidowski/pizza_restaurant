import { ReactNode } from "react";

export const emitPizzaSize = (name: string): ReactNode => {
  switch (name) {
    case "small":
      return "24 cm";
    case "medium":
      return "35 cm";
    case "large":
      return "50 cm";
  }
};
