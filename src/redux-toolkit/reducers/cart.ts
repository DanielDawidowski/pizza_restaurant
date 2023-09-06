import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import ICard from "../../components/cards/Card.interface";

type ICartShoppping = Omit<ICard, "type">;

interface CartState {
  items: ICartShoppping[];
}

const loadPizzaFromLocalStorage = (): ICartShoppping[] => {
  const savedPizza = localStorage.getItem("cart");
  return savedPizza ? JSON.parse(savedPizza) : [];
};

const initialState: CartState = {
  items: loadPizzaFromLocalStorage()
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addPizzaToCart: (state, action: PayloadAction<ICard>) => {
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
      console.log("cart", state.items);
    },
    removePizzaFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  }
});

export const { addPizzaToCart, removePizzaFromCart } = cartSlice.actions;

export default cartSlice.reducer;
