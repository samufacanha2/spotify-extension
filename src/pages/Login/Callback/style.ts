import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const LoginAnchor = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
