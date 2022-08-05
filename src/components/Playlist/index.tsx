import { IPlaylist } from 'types';
import { Container, Name, StyledImg } from './style';

interface IPlaylistProps {
  playlist: IPlaylist;
}
const Playlist: React.FC<IPlaylistProps> = ({ playlist }) => {
  return (
    <Container>
      <StyledImg src={playlist.images[0].url} alt={playlist.name} width={40} />
      <Name>{playlist.name}</Name>
    </Container>
  );
};

export default Playlist;
