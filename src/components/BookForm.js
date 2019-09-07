import React, { useState, useContext } from "react";
import { BooksContext } from "contexts/BooksContext";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(BooksContext);

  const handleSubmitBook = e => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", payload: { title } });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmitBook}>
      <input
        type="text"
        name="book-form"
        id="book-form"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <button type="submit">Submit new book</button>
    </form>
  );
};

export default BookForm;
