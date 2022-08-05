import PlaylistMini from './PlaylistMini';
import { useEffect } from 'react';
import { IPlaylist } from 'types';
import { Body, Container, Title } from './style';

interface IPlaylistProps {
  playlists?: IPlaylist[];
}
const Playlists: React.FC<IPlaylistProps> = ({ playlists }) => {
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

export default Playlists;
