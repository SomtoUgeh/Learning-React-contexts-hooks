import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ isLightTheme, dark, light, toggleTheme }) => {
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
        }}
      </ThemeContext.Consumer>
    );
  }
}
