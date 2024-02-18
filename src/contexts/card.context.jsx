import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

const clearCardItem = (cardItems, clearItem) => {
  return cardItems.filter((cardItem) => cardItem.id !== clearItem.id);
};

export const CardContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cardItems: [],
  addItemToCard: () => {},
  cardCount: 0,
  removeItemFromCard: () => {},
  clearCardItem: () => {},
  total: 0,
});

export const CARD_ACTION_TYPES = {
  SET_CARD_ITEMS: "SET_CARD_ITEMS",
  SET_CARD_OPEN: "SET_CARD_OPEN",
};
const INITIAL_STATE = {
  isCardOpen: false,
  cardItems: [],
  total: 0,
  cardCount: 0,
};

const cardReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CARD_ACTION_TYPES.SET_CARD_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CARD_ACTION_TYPES.SET_CARD_OPEN:
      return {
        ...state,
        isCardOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cardReducer`);
  }
};

export const CardProvider = ({ children }) => {
  const [{ cardItems, cardCount, cardTotal, isCardOpen }, dispatch] =
    useReducer(cardReducer, INITIAL_STATE);

  const setIsCardOpen = (open) => {
    dispatch(createAction(CARD_ACTION_TYPES.SET_CARD_OPEN, open));
  };

  const updateCardItemsReducer = (newCardItems) => {
    const newCardCount = newCardItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );
    const newCardTotal = newCardItems.reduce(
      (total, cardItem) => total + cardItem.quantity * cardItem.price,
      0
    );
    dispatch(
      createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, {
        cardItems: newCardItems,
        total: newCardTotal,
        cardCount: newCardCount,
      })
    );
  };

  const addItemToCard = (productToAdd) => {
    const newCardItems = addCardItem(cardItems, productToAdd);
    updateCardItemsReducer(newCardItems);
  };

  const removeItemToCard = (cardItemToRemove) => {
    const newCardItems = removeCardItem(cardItems, cardItemToRemove);
    updateCardItemsReducer(newCardItems);
  };

  const clearCardItemItemToCard = (clearItem) => {
    const newCardItems = clearCardItem(cardItems, clearItem);
    updateCardItemsReducer(newCardItems);
  };

  const value = {
    isCardOpen,
    setIsCardOpen,
    cardItems,
    addItemToCard,
    cardCount,
    removeItemToCard,
    clearCardItemItemToCard,
    cardTotal,
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
