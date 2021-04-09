import React, { ReactNode } from 'react';
import { HeaderWrapper } from './styles';

interface HeaderProps {
  children?: ReactNode;
  logo: string
}

export const Header: React.FunctionComponent<HeaderProps> = ({logo, children}) => {
  return (
    <HeaderWrapper>
      <img src={logo} alt="Logo Ioasys Books"/>
      {children}
    </HeaderWrapper>
  )
}