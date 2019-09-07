import React, { createContext, useState, useReducer } from "react";
import { themeReducers } from "../reducers/themeReducer";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [isLightTheme, dispatch] = useReducer(themeReducers, false);
  const [light] = useState({ syntax: "#555", ui: "#ddd", bg: "#eee" });
  const [dark] = useState({ syntax: "#ddd", ui: "#333", bg: "#555" });

  return (
    <ThemeContext.Provider value={{ light, dark, isLightTheme, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
