import Playlists from 'components/Playlists';
import React from 'react';
import { Container } from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <Playlists />
    </Container>
  );
};

export default Home;
