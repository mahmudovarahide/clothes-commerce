import { createSlice } from '@reduxjs/toolkit';

const addCardItem = (cardItems, productToAdd) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === productToAdd.id
  );

  if (existingCardItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === productToAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }

  return [...cardItems, { ...productToAdd, quantity: 1 }];
};

const removeCardItem = (cardItems, cardItemToRemove) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === cardItemToRemove.id
  );
  if (existingCardItem.quantity === 1) {
    return cardItems.filter((cardItem) => cardItem.id !== cardItemToRemove.id);
  }
  return cardItems.map((cardItem) =>
    cardItem.id === cardItemToRemove.id
      ? { ...cardItem, quantity: cardItem.quantity - 1 }
      : cardItem
  );
};

const clearCardItem = (cardItems, cardItemToClear) =>
  cardItems.filter((cardItem) => cardItem.id !== cardItemToClear.id);

const Card_INITIAL_STATE = {
  isCardOpen: false,
  cardItems: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState: Card_INITIAL_STATE,
  reducers: {
    setIsCardOpen(state, action) {
      state.isCardOpen = action.payload;
    },
    addItemToCard(state, action) {
      state.cardItems = addCardItem(state.cardItems, action.payload);
    },
    removeItemFromCard(state, action) {
      state.cardItems = removeCardItem(state.cardItems, action.payload);
    },
    clearItemFromCard(state, action) {
      state.cardItems = clearCardItem(state.cardItems, action.payload);
    },
  },
});

export const {
  setIsCardOpen,
  addItemToCard,
  removeItemFromCard,
  clearItemFromCard,
} = cardSlice.actions;

export const cardReducer = cardSlice.reducer;