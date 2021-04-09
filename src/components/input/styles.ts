import styled from 'styled-components';
import { rem } from 'polished';

export const InputWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 1rem;
  
  width: 100%;

  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(${rem('2px')});
  border-radius: ${rem('4px')};

  padding: ${rem('8px')} ${rem('13px')};
  margin-bottom: 1rem;

  label {
    color: white;
    margin-bottom: ${rem('4px')};
    opacity: .5;
  }

  button {
    position: absolute;
    right: ${rem('12px')};

    border-radius: ${rem('44px')};
    padding: ${rem('8px')} ${rem('20px')};

    border: none;

    color: #B22E6F;
    font-weight: 600;
  }

  input {
    color: white;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;

    height: ${rem('24px')};
    line-height: ${rem('24px')};

    border: none;
    background-color: transparent;
  }
`