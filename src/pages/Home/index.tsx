import Playlists from 'components/Playlists';
import React, { useEffect } from 'react';
import api from 'services/api';
import { IPlaylist } from 'types';
import { IPlaylistResponse } from 'types/dtos';
import { Container, Section, SectionTitle, SideScrollContainer } from './style';

const Home: React.FC = () => {
  const [playlists, setPlaylists] = React.useState<IPlaylist[]>([]);

  const getHashParams = (): any => {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.pathname.split('/')[2];
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  };

  useEffect(() => {
    const init = async () => {
      const params = getHashParams();
      console.log(params);
      sessionStorage.setItem('access_token', params.access_token);
      sessionStorage.setItem('refresh_token', params.refresh_token);

      const playlistsResponse: IPlaylistResponse = await api.get(
        '/me/playlists',
        {
          headers: {
            Authorization: `Bearer ${params.access_token}`,
          },
        },
      );

      console.log(playlistsResponse);
      setPlaylists(playlistsResponse.data.items);
    };
    init();
  }, []);

  const mockImages = (initialNumber: number) => {
    return (
      playlists.length > 0 &&
      [1, 2, 3, 4, 5].map(i => (
        <img
          src={playlists[i + initialNumber].images[0].url}
          alt={playlists[i + initialNumber].name}
          width={120}
        />
      ))
    );
  };
  return (
    <Container>
      <Playlists playlists={playlists} key={String(playlists)} />
      <Section>
        <SectionTitle>Hear Again</SectionTitle>
        <SideScrollContainer>{mockImages(0)}</SideScrollContainer>
      </Section>
      <Section>
        <SectionTitle>Your Daily Mix #1</SectionTitle>
        <SideScrollContainer>{mockImages(2)}</SideScrollContainer>
      </Section>
      <Section>
        <SectionTitle>Your Daily Mix #2</SectionTitle>
        <SideScrollContainer>{mockImages(4)}</SideScrollContainer>
      </Section>
      <Section>
        <SectionTitle>Your Daily Mix #3</SectionTitle>
        <SideScrollContainer>{mockImages(6)}</SideScrollContainer>
      </Section>
    </Container>
  );
};

export default Home;
