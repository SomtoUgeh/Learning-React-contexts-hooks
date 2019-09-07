import React, { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../contexts/ThemeContext";
import { BooksContext } from "../contexts/BooksContext";
import BookForm from "./BookForm";

const BookList = () => {
  const { isLightTheme, dark, light, dispatch } = useContext(ThemeContext);
  const { books } = useContext(BooksContext);
  const theme = isLightTheme ? light : dark;

  const toggleTheme = () => {
    dispatch({type: "TOGGLE_THEME"});
  };

  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      {books.length > 0 ? <ul>
        {books.map((book, index) => (
          <li style={{ background: theme.ui }} key={index}>
            {book.title}
          </li>
        ))}
      </ul> : <ul>
        <li>No books available</li>
      </ul>}
      <BookForm />
      <ThemeToggle toggleTheme={toggleTheme} />
    </div>
  );
};

export default BookList;
