import NewPlaylistModal from 'components/NewPlaylistModal';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
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
  const [newPlaylistModalOpen, setNewPlaylistModalOpen] = useState(false);

  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem('access_token');

  const getPlaylists = useCallback(async () => {
    const playlistResponse: IPlaylistsResponse = await api.get(
      `/me/playlists?limit=50`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    console.log(playlistResponse);
    setPlaylists(playlistResponse.data.items);
  }, [accessToken]);

  useEffect(() => {
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

          <AiOutlinePlus onClick={() => setNewPlaylistModalOpen(true)} />
        </HeaderContent>

        <Back onClick={handleBack}>Back</Back>
      </Header>

      <Content>
        <NewPlaylistModal
          isOpen={newPlaylistModalOpen}
          setIsOpen={setNewPlaylistModalOpen}
          onClose={getPlaylists}
        />
        {playlists?.map(playlist => (
          <TrackContainer key={playlist.id}>
            {playlist?.images[0]?.url ? (
              <TrackImg
                src={playlist.images[0].url}
                alt={playlist.name}
                onClick={(e: any) => handleNavigate(e, playlist.id)}
              />
            ) : (
              <TrackImg
                src={
                  'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2013/12/18/beaglegetty.jpg'
                }
                alt={playlist.name}
                onClick={(e: any) => handleNavigate(e, playlist.id)}
              />
            )}
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
