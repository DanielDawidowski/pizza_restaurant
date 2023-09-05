import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import type { RootState } from "../store";
import { incrementIngredients, countTotalIngredients, decrementIngredient } from "../../utils/utils.service";

export interface IngredientProps {
  name: string;
  count: number;
  disabled?: boolean;
}

interface IngredientsState {
  ingredient: IngredientProps[];
  total: number;
  onPizza?: boolean;
}

const initialState: IngredientsState = {
  ingredient: [{ name: "", count: 0, disabled: false }],
  total: 0,
  onPizza: false
};

const list: string[] = [];

export const ingredientSlice = createSlice({
  name: "ingredient",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      list.push(action.payload);
      state.ingredient = incrementIngredients(list);
      state.total = countTotalIngredients(state.ingredient);
      console.log("list: ", list);
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.ingredient = decrementIngredient(list, action.payload, state.ingredient);
      state.total = countTotalIngredients(state.ingredient);
      console.log("list: ", list);
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.total += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = ingredientSlice.actions;

export const selectTotal = (state: RootState): number => {
  return state.ingredients.total;
};

export default ingredientSlice.reducer;
