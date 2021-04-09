import { rem } from 'polished';
import styled from 'styled-components';

import background from '../../assets/images/background-login.png';

export const LoginWrapper = styled.div`
  display: flex;
  
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;

  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  main {
    width: min(90%, ${rem('368px')});
    position: absolute;

    form {
      display: flex;
      flex-direction: column;

      margin-top: ${rem('50px')};
    }

    @media(min-width: 600px) {
      left: ${rem('115px')};
    }
  }
`