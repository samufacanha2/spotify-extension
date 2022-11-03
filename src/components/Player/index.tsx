import { Container } from './style';

import { usePlayer } from 'Contexts/player';
import SpotifyPlayer from 'react-spotify-web-playback';

const Player: React.FC = () => {
  const accessToken = sessionStorage.getItem('access_token') || '';

  const { player, uris } = usePlayer();

  return (
    <Container>
      <SpotifyPlayer
        autoPlay
        ref={player}
        token={accessToken}
        uris={uris}
        key={uris[0]}
        name="Extension Player"
      />
    </Container>
  );
};

export default Player;
