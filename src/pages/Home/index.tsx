import Playlists from 'components/Playlists';
import React, { useEffect } from 'react';
import api from 'services/api';
import { IPlaylist } from 'types';
import { IPlaylistResponse } from 'types/dtos';
import { Container } from './style';

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

  const mockImage = () => {
    return (
      playlists.length > 0 && (
        <img
          src={playlists[0].images[0].url}
          alt={playlists[0].name}
          width={120}
        />
      )
    );
  };
  return (
    <Container>
      <Playlists playlists={playlists} key={String(playlists)} />
      <h2>Your Daily Mix #1</h2>
      {mockImage()}
      <h2>Your Daily Mix #2</h2>
      {mockImage()}
      <h2>Your Daily Mix #3</h2>
      {mockImage()}
      <h2>Your Daily Mix #4</h2>
      {mockImage()}
    </Container>
  );
};

export default Home;
