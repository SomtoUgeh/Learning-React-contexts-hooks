import React, {useContext} from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../contexts/ThemeContext";
import { BooksContext } from "../contexts/BooksContext";

const BookList = () => {
  const { isLightTheme, dark, light, toggleTheme } = useContext(ThemeContext);
  const { books } = useContext(BooksContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map(book => (
          <li style={{ background: theme.ui }} key={book.id}>{book.title}</li>
        ))}
      </ul>

      <ThemeToggle toggleTheme={toggleTheme} />
    </div>
  );
};

export default BookList;
