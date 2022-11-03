import { useEffect } from 'react';
import { IPlaylist } from 'types';
import PlaylistMini from './PlaylistMini';
import { Body, Container, Title } from './style';

interface IPlaylistProps {
  playlists?: IPlaylist[];
}
const PlaylistCards: React.FC<IPlaylistProps> = ({ playlists }) => {
  useEffect(() => {
    console.log('playlists', playlists);
  }, [playlists]);
  return (
    <Container>
      <Title>Playlists</Title>
      <Body>
        {playlists?.slice(0, 4).map(playlist => (
          <PlaylistMini playlist={playlist} />
        ))}
      </Body>
    </Container>
  );
};

export default PlaylistCards;