export const bookReducers = (state, action) => {
  switch (action.type) {
  case "ADD_BOOK":
    return [...state, action.payload];

  default:
    return state;
  }
};
