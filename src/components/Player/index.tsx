import { useCallback, useEffect, useState } from 'react';
import api from 'services/api';
import { Container, Info, StyledPlay } from './style';

const Player: React.FC = () => {
  //TODO: get CURRENT
  const [current, setCurrent] = useState<any>(null);
  const getCurrentSong = useCallback(async () => {
    const currentSong = await api.get('/me/player/recently-played', {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    });

    console.log(currentSong);

    setCurrent(currentSong.data.items[1]);
  }, []);

  useEffect(() => {
    getCurrentSong();
  }, []);
  return (
    <Container>
      <img src={current?.track.album.images[0].url} alt="" width={42} />
      <Info>
        {current?.track?.name}
        <p>{current?.track?.artists[0].name}</p>
      </Info>
      <StyledPlay />
    </Container>
  );
};

export default Player;
