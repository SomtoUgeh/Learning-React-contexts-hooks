import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "contexts/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {({ isAuthenticated, toggleAuthentication }) => (
          <ThemeContext.Consumer>
            {({ isLightTheme, light, dark }) => {
              const theme = isLightTheme ? light : dark;

              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>

                  <h3>{isAuthenticated ? "Logged in" : "Logged out"}</h3>
                  <button onClick={toggleAuthentication}>
                    {isAuthenticated ? "Logout" : "Login"}
                  </button>

                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
