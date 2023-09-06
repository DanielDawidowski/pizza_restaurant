import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { incrementIngredient, countTotalIngredients, decrementIngredient } from "../../utils/utils.service";

export interface IngredientProps {
  name: string;
  count: number;
  price: number;
  disabled?: boolean;
}

interface IngredientsState {
  ingredient: IngredientProps[];
  total: number;
  price: number;
}

const initialState: IngredientsState = {
  ingredient: [{ name: "", count: 0, price: 0, disabled: false }],
  total: 0,
  price: 0
};

const list: string[] = [];

export const ingredientSlice = createSlice({
  name: "ingredient",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      list.push(action.payload);
      state.ingredient = incrementIngredient(list);
      state.total = countTotalIngredients(state.ingredient);
      state.price = state.total * 3;
      console.log("list: ", state.ingredient);
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.ingredient = decrementIngredient(list, action.payload, state.ingredient);
      state.total = countTotalIngredients(state.ingredient);
      state.price = state.total * 3;
      console.log("list: ", state.ingredient);
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.total += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = ingredientSlice.actions;

export default ingredientSlice.reducer;
