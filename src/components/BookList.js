import React, {useContext} from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, dark, light, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        <li style={{ background: theme.ui }}>The wait of Kings</li>
        <li style={{ background: theme.ui }}>The name of the winds</li>
        <li style={{ background: theme.ui }}>The final empire</li>
      </ul>

      <ThemeToggle toggleTheme={toggleTheme} />
    </div>
  );
};

export default BookList;
