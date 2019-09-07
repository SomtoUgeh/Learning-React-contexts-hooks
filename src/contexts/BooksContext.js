import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const BooksContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Farm land", id: 1 },
    { title: "Animal farm", id: 2 },
    { title: "Shallow world", id: 3 },
    { title: "Thank Jesus", id: 4 }
  ]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>{props.children}</BooksContext.Provider>
  );
};

export default BooksContextProvider;
