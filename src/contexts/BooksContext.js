import React, { createContext, useReducer } from "react";
import { bookReducers } from "../reducers/bookReducers";

export const BooksContext = createContext();

const BooksContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducers, []);

  return (
    <BooksContext.Provider value={{ books, dispatch }}>{props.children}</BooksContext.Provider>
  );
};

export default BooksContextProvider;
