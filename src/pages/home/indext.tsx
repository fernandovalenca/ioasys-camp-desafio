import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logoutIcon from '../../assets/icons/logout.svg';
import logo from '../../assets/icons/logo-dark.svg';
import { GrPrevious, GrNext } from 'react-icons/gr';

import { Container, HomeWrapper, Profile, Footer } from './styles';

import { Header, BookItem } from '../../components';
import { api } from '../../services/api';
import { BookProvider } from '../../context/BookContext';

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

export const Home: React.FunctionComponent = () => {
  const [books, setBooks] = useState<IBookItem[] | null>(null)
  const [name, setName] = useState('');

  useEffect(()=>{
    const auth = localStorage.getItem('Auth')
    const data = localStorage.getItem('Data');
    const { authorization } = (auth? JSON.parse(auth) : '')
    const { name } = (data? JSON.parse(data) : '');

    setName(name);
    if(authorization){
      api.get('books?page=1&amount=12&category=biographies', {
        headers: {
          authorization: "Bearer " + authorization,
        }
      }).then(({ data: { data }}) => {
        setBooks(data);
      }).catch(error => {
        console.log({error});
      })
    }

  },[])

  const logout = useCallback(()=>{
    localStorage.clear();
  },[])

  return (
    <BookProvider books={books}>
    <HomeWrapper>
      <Container>
        <Header logo={logo} >
          <Profile>
            <p>Bem vindo,<strong>{name}!</strong></p>
            <Link to="/" onClick={logout}>
              <img src={logoutIcon} alt="Logout"/>
            </Link>
          </Profile>
        </Header>
        
        <main>
            {books?.map((book)=>(
              <BookItem
              key={book.id} 
              authors={book.authors}
              published={book.published}
              publisher={book.publisher}
              pageCount={book.pageCount}
              imageUrl={book.imageUrl}
              title={book.title}
              />
            ))}
        </main>

        <Footer>
          <p>Página <strong>1</strong> de <strong>100</strong></p>
          <GrNext color="#333" size={10} />
          <GrPrevious color="#333" size={10} />
        </Footer>
      </Container>
    </HomeWrapper>
    </BookProvider>
  )
}