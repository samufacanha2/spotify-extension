import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  height: 3rem;
  background-color: ${props => props.theme.lightgreen};
`;
