import { createSelector } from "reselect";

const selectCardReducer = (state) => state.card;

export const selectCardItems = createSelector(
  [selectCardReducer],
  (card) => card.cardItems
);

export const selectIsCardOpen = createSelector(
  [selectCardReducer],
  (card) => card.isCardOpen
);

export const selectCardCount = createSelector([selectCardItems], (card) =>
  card.reduce((total, cardItem) => total + cardItem.quantity, 0)
);

export const selectCardTotal = createSelector([selectCardItems], (card) =>
  card.reduce(
    (total, cardItem) => total + cardItem.quantity * cardItem.price,
    0
  )
);
