import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 175px;

  &:hover {
    cursor: pointer;
    user-select: none;
  }
`;

export const StyledImg = styled.img`
  border-radius: 1rem;
`;

export const Name = styled.div`
  white-space: nowrap;
  font-weight: 600;

  padding: 0 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;
