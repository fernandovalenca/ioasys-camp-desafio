import React from 'react';
import { BookWrapper, Book, Details } from './styles';
import { useBookContext } from '../../context/BookContext';

interface IBookItem {
  authors: [string]
  imageUrl: string;
  pageCount: number;
  published: number;
  publisher: string;
  title: string;
}

export const BookItem: React.FunctionComponent<IBookItem> = ({
  title, authors, pageCount, published, publisher, imageUrl
}) => {
  const { handleBookModal } = useBookContext();

  return (
    <BookWrapper onClick={handleBookModal}>
      <Book>
        <img src={imageUrl} alt={title} />
      </Book>
      <Details>
        <h1>{title}</h1>
        <h2>{authors}</h2>
        <p>
          {pageCount} páginas Editora {publisher} Publicado em {published}.
        </p>
      </Details>
    </BookWrapper>
  )
}