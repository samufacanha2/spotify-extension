import { useNavigate } from 'react-router';
import { IPlaylist } from 'types';
import { Container, Name, StyledImg } from './style';

interface IPlaylistProps {
  playlist: IPlaylist;
}
const PlaylistMini: React.FC<IPlaylistProps> = ({ playlist }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/playlist/${playlist.id}`);
  };

  return (
    <Container onClick={handleNavigate}>
      <StyledImg src={playlist.images[0].url} alt={playlist.name} width={40} />
      <Name>{playlist.name}</Name>
    </Container>
  );
};

export default PlaylistMini;
