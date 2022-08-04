import { useEffect } from 'react';
import { IPlaylist } from 'types';
import { Container } from './style';

interface IPlaylistProps {
  playlists?: IPlaylist[];
}
const Playlists: React.FC<IPlaylistProps> = ({ playlists }) => {
  useEffect(() => {
    console.log('playlists', playlists);
  }, [playlists]);
  return (
    <Container>
      Playlists
      {playlists?.map(playlist => (
        <div key={String(playlist)}>
          <img src={playlist.images[0].url} alt={playlist.name} width={40} />
          {playlist.name}
        </div>
      ))}
    </Container>
  );
};

export default Playlists;
