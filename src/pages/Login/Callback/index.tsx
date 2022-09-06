import { useLogin } from 'Contexts/login';
import { useEffect } from 'react';
import { Container } from './style';

const Callback: React.FC = () => {
  const { callback, storedState } = useLogin();

  useEffect(() => {
    if (storedState) {
      (async () => await callback())();
    }
  }, [storedState]);

  return <Container></Container>;
};

export default Callback;
