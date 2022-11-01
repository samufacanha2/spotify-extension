import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  position: absolute;
  gap: 0.5rem;

  bottom: 3rem;
  left: 0;
  right: 0;
  min-height: 3rem;
  width: 100%;
  background-color: ${props => props.theme.lightgreen};

  path {
    color: ${props => props.theme.dark};
  }

  > div {
    background-color: unset !important;
  }
  p {
    max-width: 15rem;
  }
`;
