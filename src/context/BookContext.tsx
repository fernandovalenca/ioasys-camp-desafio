import React, { createContext, FunctionComponent, ReactNode, useCallback, useContext, useState } from "react";
import { ModalBook } from "../components";

interface IBookContext {
  isBookModalOpen: boolean;
  handleBookModal: ()=> void;
}

interface IBookProvider {
  children: ReactNode;
  books?: IBookItem[] | null;
}

interface IBookItem {
  id: string;
  authors: [string]
  category: string;
  description: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pageCount: number;
  published: number;
  publisher: string;
  title: string;
}

const BookContext = createContext({} as IBookContext);

export const BookProvider: FunctionComponent<IBookProvider> = ({
  children,
  books,
}) => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const handleBookModal = useCallback(()=>{
    isBookModalOpen? setIsBookModalOpen(false) : setIsBookModalOpen(true)
    console.log(books, isBookModalOpen)
  },[isBookModalOpen, books]);

  return (
    <BookContext.Provider
      value={{
        isBookModalOpen,
        handleBookModal,
      }}
    >
      {children}
      {isBookModalOpen && <ModalBook /> }
    </BookContext.Provider>
  )
}

export const useBookContext = (): IBookContext => {
  const context = useContext(BookContext);

  return context;
}