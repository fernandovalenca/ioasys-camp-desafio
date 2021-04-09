import styled from 'styled-components';
import { rem } from 'polished';

export const BookWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${rem('21px')};

  width: 252px;
  height: 180px;

  padding: ${rem('19px')} ${rem('16px')};

  background-color: white;

  background: #FFFFFF;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
`

export const Book = styled.div`
  align-items: center;

  img {
    width: 81px;
    height: 150.75px;
  }
`

export const Details = styled.div`
  
  h1 {
    font-size: ${rem('14px')};
    font-weight: 500;
    line-height: ${rem('20px')};

    color: #333;
  }

  h2 {
    font-size: ${rem('12px')};
    font-weight: 400;
    line-height: ${rem('20px')};

    color: #AB2680;
  }

  p {
    font-size: ${rem('12px')};
    font-weight: 400;
    line-height: ${rem('20px')};

    color: #999;

    margin-top: ${rem('25px')};
  }
`