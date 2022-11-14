import { useEffect } from 'react';
import api from 'services/api';
import { IPlaylist, ITrack } from 'types';
import {
  Container,
  Content,
  TrackContainer,
  TrackContent,
  TrackImg,
  TrackName,
} from './styles';

interface PlaylistModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  playlists?: IPlaylist[];
  selectedTrack?: ITrack;
}
const PlaylistModal: React.FC<PlaylistModalProps> = ({
  isOpen,
  setIsOpen,
  playlists,
  selectedTrack,
}: PlaylistModalProps) => {
  const accessToken = sessionStorage.getItem('access_token');

  const handleAddToPlaylist = async (e: any, playlistId: string) => {
    const trackUri = selectedTrack?.uri;

    await api.post(
      `/playlists/${playlistId}/tracks?uris=${trackUri}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    setIsOpen(false);
  };

  useEffect(() => {
    console.log(selectedTrack, playlists);
  }, [selectedTrack, playlists]);

  return (
    <Container isOpen={isOpen}>
      <Content>
        {selectedTrack &&
          playlists?.map(playlist => (
            <TrackContainer key={playlist.id}>
              <TrackImg
                src={playlist.images[0].url}
                alt={playlist.name}
                onClick={(e: any) => handleAddToPlaylist(e, playlist.id)}
              />
              <TrackContent
                onClick={(e: any) => handleAddToPlaylist(e, playlist.id)}
              >
                <TrackName>{playlist.name}</TrackName>
              </TrackContent>
            </TrackContainer>
          ))}
      </Content>
    </Container>
  );
};

export default PlaylistModal;
