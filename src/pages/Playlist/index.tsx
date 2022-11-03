import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import api from 'services/api';
import { IPlaylist } from 'types';
import { IPlaylistResponse } from 'types/dtos';
import { parseMilliseconds } from 'utils';
import {
  Back,
  Container,
  Content,
  Header,
  HeaderContent,
  Play,
  TrackActions,
  TrackArtist,
  TrackContainer,
  TrackContent,
  TrackDuration,
  TrackImg,
  TrackName,
} from './styles';

import { usePlayer } from 'Contexts/player';
import { HiOutlineTrash } from 'react-icons/hi';
import { toast } from 'react-toastify';

const Playlist = () => {
  const [playlist, setPlaylist] = useState<IPlaylist>();
  const { playlistId } = useParams();
  const { player, setUris } = usePlayer();

  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem('access_token');

  useEffect(() => {
    const getPlaylist = async () => {
      const playlistResponse: IPlaylistResponse = await api.get(
        `/playlists/${playlistId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      console.log(playlistResponse);
      setPlaylist(playlistResponse.data);
    };
    getPlaylist();
  }, []);

  const handleBack = (e: any) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    toast.success('Track removed from playlist');
  };

  const handlePlay = async (e: any, uri: string) => {
    e.preventDefault();

    uri && setUris([uri]);

    await player.current.togglePlay();
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          {playlist && (
            <>
              <h1>{playlist.name}</h1>
              <p>{playlist.description}</p>
            </>
          )}

          <Play onClick={(e: any) => handlePlay(e, playlist?.uri || '')}>
            {' '}
            Play
          </Play>
        </HeaderContent>

        <Back onClick={handleBack}>Voltar</Back>
      </Header>

      <Content>
        {playlist?.tracks.items.map(track => (
          <TrackContainer key={track.track.id}>
            <TrackImg
              src={track.track.album.images[0].url}
              alt={track.track.name}
              onClick={(e: any) => handlePlay(e, track.track.uri)}
            />
            <TrackContent>
              <TrackName>{track.track.name}</TrackName>
              <TrackArtist>{track.track.artists[0].name}</TrackArtist>
              <TrackDuration>
                {parseMilliseconds(track.track.duration_ms)}
              </TrackDuration>
            </TrackContent>
            <TrackActions>
              <HiOutlineTrash onClick={handleDelete} />
            </TrackActions>
          </TrackContainer>
        ))}
      </Content>
    </Container>
  );
};

export default Playlist;
