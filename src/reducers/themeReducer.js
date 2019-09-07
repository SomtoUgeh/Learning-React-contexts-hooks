export const themeReducers = (state, action) => {
  switch (action.type) {
  case "TOGGLE_THEME":
    return !state;

  default:
    return state;
  }
};
