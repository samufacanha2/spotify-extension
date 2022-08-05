import React from 'react';
import { Container, LoginAnchor } from './style';

const Login: React.FC = () => {
  return (
    <Container>
      <LoginAnchor href="http://localhost:8888/login">Login</LoginAnchor>
    </Container>
  );
};

export default Login;
