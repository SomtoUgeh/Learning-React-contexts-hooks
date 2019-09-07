import React, { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../contexts/ThemeContext";
import { BooksContext } from "../contexts/BooksContext";
import BookForm from "./BookForm";

const BookList = () => {
  const { isLightTheme, dark, light, toggleTheme } = useContext(ThemeContext);
  const { books } = useContext(BooksContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map((book, index) => (
          <li style={{ background: theme.ui }} key={index}>
            {book.title}
          </li>
        ))}
      </ul>
      <BookForm />
      <ThemeToggle toggleTheme={toggleTheme} />
    </div>
  );
};

export default BookList;
