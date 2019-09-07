import React, { Component } from "react";

export default class ThemeToggle extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggleTheme}>Toggle theme</button>
      </div>
    );
  }
}
