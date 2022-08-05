import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

export const Container = styled.div`
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  position: absolute;
  gap: 0.5rem;

  bottom: 3rem;
  left: 0;
  right: 0;
  height: 3rem;
  background-color: ${props => props.theme.lightgreen};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledPlay = styled(FaPlay)`
  color: ${props => props.theme.white};
  font-size: 2rem;
  margin-left: auto;
`;
