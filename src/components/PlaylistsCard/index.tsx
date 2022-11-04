import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { IPlaylist } from 'types';
import PlaylistMini from './PlaylistMini';
import { Body, Container, More, Title } from './style';

interface IPlaylistProps {
  playlists?: IPlaylist[];
}
const PlaylistCards: React.FC<IPlaylistProps> = ({ playlists }) => {
  const navigate = useNavigate();
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
        <More
          onClick={() => {
            navigate('/playlists');
          }}
        >
          See more
        </More>
      </Body>
    </Container>
  );
};

export default PlaylistCards;
