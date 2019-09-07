import React from "react";
import Navbar from "components/Navbar";
import BookList from "components/BookList";
import AuthContextProvider from "contexts/AuthContext";
import ThemeContextProvider from "contexts/ThemeContext";
import BooksContextProvider from "contexts/BooksContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BooksContextProvider>
            <BookList />
          </BooksContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
