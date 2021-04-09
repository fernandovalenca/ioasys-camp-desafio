import React from 'react';

import * as Styled from './styles';

import quotes from '../../assets/icons/quotes.svg';
import { useBookContext } from '../../context/BookContext';

export const ModalBook: React.FunctionComponent = () => {
  const { handleBookModal } = useBookContext();

  return (
    <Styled.ModalOverlay>
      <Styled.ButtonClose onClick={handleBookModal}>
        x
      </Styled.ButtonClose>
      <Styled.ModalContainer>
        <aside>
          <img src="https://www.adobe.com/br/express/create/cover/media_19a7c3bcd464c0a9a955b9a538fe32f888e89c7e1.png?width=2000&format=webply&optimize=medium" alt="Capa do Livro"/>
        </aside>
        <section>
          <Styled.Description>
            <header>
              <h1>Change By Design Second Line Example</h1>
              <p>Tim Brown, Julie Zhuo, Fried Maximiilian</p>
            </header>
            <main>
              <Styled.About>
                <header>
                  <h2>INFORMAÇÕES</h2>
                </header>
                <section>
                  
                <Styled.Label>
                  <p>Páginas</p>
                  <p>Editora</p>
                  <p>Publicação</p>
                  <p>Idioma</p>
                  <p>Título Original</p>
                  <p>ISBN-10</p>
                  <p>ISBN-13</p>
                </Styled.Label>
                <Styled.Info>
                  <p>304 páginas</p>
                  <p>Editora Loyola</p>
                  <p>2020</p>
                  <p>Inglês</p>
                  <p>Change By Design</p>
                  <p>00000000000</p>
                  <p>00000000000</p>
                </Styled.Info>
                </section>
              </Styled.About>
              <Styled.Review>
                <header>
                <h2>RESENHA DA EDITORA</h2>
                </header>
                <blockquote>
                  <img src={quotes} alt=""/>
                  The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
              </blockquote>
              </Styled.Review>
            </main>
          </Styled.Description>
        </section>
      </Styled.ModalContainer>
    </Styled.ModalOverlay>
  )
}