import React, { createContext, useReducer } from "react";
import { bookReducers } from "../reducers/bookReducers";

export const BooksContext = createContext();

const BooksContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducers, [
    { title: "Farm land" },
    { title: "Animal farm" },
    { title: "Shallow world" },
    { title: "Thank Jesus" }
  ]);

  return (
    <BooksContext.Provider value={{ books, dispatch }}>{props.children}</BooksContext.Provider>
  );
};

export default BooksContextProvider;
