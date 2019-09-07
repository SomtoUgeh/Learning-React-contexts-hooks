import React from "react";
import Navbar from "components/Navbar";
import BookList from "components/BookList";
import AuthContextProvider from "contexts/AuthContext";
import ThemeContextProvider from "contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookList />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
