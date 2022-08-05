import BottomNavigationBar from 'components/BottomNavigationBar';
import Logo from 'components/Logo';
import Player from 'components/Player';
import React from 'react';
import { Outlet } from 'react-router';
import { Navigate } from 'react-router-dom';
import { Body, Container, Header } from './style';

const Layout: React.FC = () => {
  const permission =
    sessionStorage.getItem('access_token') ||
    (window.location.pathname.split('/')[1] === 'feed' &&
      window.location.pathname.split('/')[2] !== '');
  return permission ? (
    <>
      <Container>
        <Header>
          <Logo />
        </Header>
        <Body>
          <Outlet />
        </Body>
        <Player />
        <BottomNavigationBar />
      </Container>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Layout;
