import { useLogin } from 'Contexts/login';
import { Container, LoginAnchor } from './style';

const Login: React.FC = () => {
  const { login } = useLogin();

  return (
    <Container>
      <LoginAnchor onClick={login}>Login</LoginAnchor>
    </Container>
  );
};

export default Login;
