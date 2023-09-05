import { IngredientProps } from "../redux-toolkit/reducers/ingredient";

export function discountPrice(price: number): number {
  return price * 2;
}

export function incrementIngredients(arr: string[]): IngredientProps[] {
  const ingredientsCount: { [key: string]: number } = {};
  const ingredientDisabled: { [key: string]: boolean } = {};

  // Count the occurrences of each fruit
  for (const ing of arr) {
    if (ingredientsCount[ing]) {
      ingredientsCount[ing]++;
    } else {
      ingredientsCount[ing] = 1;
    }
  }

  for (const ing in ingredientsCount) {
    if (ingredientsCount[ing] > 1) {
      ingredientDisabled[ing] = true;
    } else {
      ingredientDisabled[ing] = false;
    }
  }

  // Convert the count map into an array of objects
  const total: IngredientProps[] = [];
  for (const name in ingredientsCount) {
    total.push({ name, count: ingredientsCount[name], disabled: ingredientDisabled[name] });
  }
  return total;
}

export function decrementIngredient(arr: string[], ingredient: string, ingArray: IngredientProps[]): IngredientProps[] {
  const index = ingArray.findIndex((ing) => ing.name === ingredient);
  if (index !== -1) {
    ingArray[index].count--;
    arr.splice(index, 1);
    if (ingArray[index].count === 0) {
      arr.splice(index, 1);
      ingArray.splice(index, 1);
    } else if (ingArray[index].count === 1) {
      ingArray[index].disabled = false;
    } else {
      ingArray[index].disabled = true;
    }
  }
  return ingArray;
}

export const countTotalIngredients = (arr: IngredientProps[]): number => {
  return arr.reduce((acc, curr) => acc + curr.count, 0);
};

export const disableIngredients = (arr: IngredientProps[]): IngredientProps[] => {
  for (const ing of arr) {
    if (ing.count > 1) {
      ing.disabled = true;
    } else {
      ing.disabled = false;
    }
  }
  return arr;
};
