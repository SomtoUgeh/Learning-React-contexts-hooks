import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [ isLightTheme, setTheme ] = useState(true);
  const [ light ] = useState({ syntax: "#555", ui: "#ddd", bg: "#eee" });
  const [ dark ] = useState({ syntax: "#ddd", ui: "#333", bg: "#555" });

  const toggleTheme = () => {
    setTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ light, dark, isLightTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
