import { configureStore } from "@reduxjs/toolkit";
import ingredientReducer from "./reducers/ingredient";
import cartReducer from "./reducers/cart";
// ...

export const store = configureStore({
  reducer: {
    ingredients: ingredientReducer,
    cart: cartReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
