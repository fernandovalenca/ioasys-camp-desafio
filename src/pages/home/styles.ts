import { rem } from 'polished';
import styled from 'styled-components';

import background from '../../assets/images/background-home.png'

export const HomeWrapper = styled.div`
overflow: none;
  display: flex;

  width: 100vw;
  height: 100vh;

  justify-content: center;

  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media(min-width: 770px){
    height: 100vh;
  }
`

export const Container = styled.div`
  width: 72vw;
  margin: ${rem('42px')};

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    grid-gap: 1rem;
    margin-top: ${rem('50px')};

    @media(min-width: 770px){
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  p {
    display: none;
  }

  strong {
    margin-left: 5px;
  }

  img {
    margin-left: 1rem;
  }

  @media(min-width: 560px){
    p {
      display: flex;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: #333;

  margin-top: 1rem;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;

    size: 5px;

    width: ${rem('30px')};
    height: ${rem('30px')};

    border-radius: 50%;
    margin-left: 1rem;

    border: 1px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  
`