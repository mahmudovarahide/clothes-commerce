import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cardReducer } from "./card/card.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  card: cardReducer,
});
