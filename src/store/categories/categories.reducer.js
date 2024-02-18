import { createSlice } from "@reduxjs/toolkit";
import { userSlice } from "../user/user.reducer";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});
export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
