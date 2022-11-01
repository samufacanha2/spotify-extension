import { Container } from './style';

import SpotifyPlayer from 'react-spotify-web-playback';

const Player: React.FC = () => {
  return (
    <Container>
      <SpotifyPlayer
        autoPlay
        token="BQD6Lmd6D4Szrf25bg6Chvv9cPjxoCX6d5_wQOetCHgi2GW9PuTVnsqmF-MKn68gxqYDOiLI4-S2NovlQGrmb1OQtJ20_18xZgn7_G8RJHlwYK7eBCMNhW3oDWhZ5qM_hbU8gjT7JpyCuYyQKL5neY5XobbRGVT8mo7GrX9Qr2ml-eTvCkFALyOymfNHc4RvVhTPAKRE33EiMA0wyeq_ldfoZnsYX5oK5aM"
        uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
        name="Extension Player"
      />
    </Container>
  );
};

export default Player;
