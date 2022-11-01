import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.white};
  padding: 0.25rem;
`;

export const SideScrollContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  width: 100%;
  min-height: 120px;

  padding: 0.5rem 0.25rem;

  overflow: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    height: 0.25rem;
    z-index: 1;
  }

  img {
    &:hover {
      cursor: pointer;
      user-select: none;
    }
  }
`;
