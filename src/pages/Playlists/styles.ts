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
  padding: 0 1rem;

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
  gap: 0.5rem;

  margin-left: auto;

  svg {
    cursor: pointer;
  }
`;
