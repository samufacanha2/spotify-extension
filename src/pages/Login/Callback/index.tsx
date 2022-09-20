import { useLogin } from 'Contexts/login';
import { useEffect } from 'react';
import { Container } from './style';

const Callback: React.FC = () => {
  const { callback } = useLogin();

  useEffect(() => {
    const storedState = localStorage.getItem('spotify_auth_state');
    if (storedState) {
      (async () => await callback())();
    }
  }, []);

  return <Container></Container>;
};

export default Callback;
