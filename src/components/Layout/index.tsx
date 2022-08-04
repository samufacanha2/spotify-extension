import BottomNavigationBar from 'components/BottomNavigationBar';
import Logo from 'components/Logo';
import Player from 'components/Player';
import React from 'react';
import { Container } from './style';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Container>
      <Logo />
      {children}
      <Player />
      <BottomNavigationBar />
    </Container>
  );
};

export default Layout;
