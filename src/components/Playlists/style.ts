import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
`;

export const Body = styled.div`
  display: grid;
  //TODO: FIX WIDTH TO GET FROM VIEWPORT
  width: 325px;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 0;
`;
