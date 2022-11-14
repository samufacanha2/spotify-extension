import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: hidden;
  height: 100%;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 0.5rem;
  width: 100%;
`;

export const HeaderContent = styled.div``;
export const Play = styled.div``;

export const Back = styled.span`
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;

  overflow-y: auto;
`;

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding: 0.5rem;

  border-radius: 0.5rem;
  backdrop-filter: brightness(2) grayscale(1);
`;

export const TrackImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;

  cursor: pointer;
`;

export const TrackContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.25rem;

  cursor: pointer;
`;

export const TrackName = styled.div`
  font-weight: 600;
`;

export const TrackArtist = styled.div`
  font-size: 0.75rem;
`;

export const TrackDuration = styled.div`
  font-size: 0.75rem;
`;

export const TrackActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5rem;

  margin-left: auto;

  svg {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;

  padding: 0.5rem;
`;

export const SearchContent = styled.div`
  display: flex;
  height: 2rem;

  width: 100%;
  padding: 0.5rem;

  background-color: ${props => props.theme.white};

  border-radius: 0.5rem;

  svg {
    color: ${props => props.theme.dark};
  }
`;

export const SearchInput = styled.input`
  width: 100%;
`;
