import Playlists from 'components/PlaylistsCard';
import React, { useEffect } from 'react';
import api from 'services/api';
import { IPlaylist } from 'types';
import { IPlaylistsResponse } from 'types/dtos';
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
      let access_token: string;
      let refresh_token: string;
      const params = getHashParams();
      if (params.access_token) {
        sessionStorage.setItem('access_token', params.access_token);
        sessionStorage.setItem('refresh_token', params.refresh_token);
        access_token = params.access_token;
        refresh_token = params.refresh_token;
      } else {
        access_token = sessionStorage.getItem('access_token') || '';
        refresh_token = sessionStorage.getItem('refresh_token') || '';
        console.log(refresh_token);
      }

      const playlistsResponse: IPlaylistsResponse = await api.get(
        '/me/playlists',
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
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
