import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from 'services/api';
import { IPlaylist } from 'types';
import { IPlaylistsResponse } from 'types/dtos';
import {
  Back,
  Container,
  Content,
  Header,
  HeaderContent,
  TrackContainer,
  TrackContent,
  TrackImg,
  TrackName,
} from './styles';

const Playlists = () => {
  const [playlists, setPlaylists] = useState<IPlaylist[]>();

  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem('access_token');

  useEffect(() => {
    const getPlaylists = async () => {
      const playlistResponse: IPlaylistsResponse = await api.get(
        `/me/playlists`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      console.log(playlistResponse);
      setPlaylists(playlistResponse.data.items);
    };
    getPlaylists();
  }, []);

  const handleBack = (e: any) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleNavigate = (e: any, id: string) => {
    e.preventDefault();
    navigate(`/playlist/${id}`);
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <h1>Playlists</h1>
        </HeaderContent>

        <Back onClick={handleBack}>Back</Back>
      </Header>

      <Content>
        {playlists?.map(playlist => (
          <TrackContainer key={playlist.id}>
            <TrackImg
              src={playlist.images[0].url}
              alt={playlist.name}
              onClick={(e: any) => handleNavigate(e, playlist.id)}
            />
            <TrackContent onClick={(e: any) => handleNavigate(e, playlist.id)}>
              <TrackName>{playlist.name}</TrackName>
            </TrackContent>
          </TrackContainer>
        ))}
      </Content>
    </Container>
  );
};

export default Playlists;
