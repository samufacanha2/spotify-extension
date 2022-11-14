import styled, { css } from 'styled-components';

export const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;

  overflow-y: hidden;
  height: 70%;
  width: 90%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  transform: translate(5%, 15%);

  visibility: hidden;
  opacity: 0.3;

  transition: opacity 0.3s;

  background-color: ${props => props.theme.darkgreen};

  backdrop-filter: brightness(0.5);

  ${props =>
    props.isOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `}
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
  overflow-y: auto;

  transition: opacity 0.3s ease-in-out;

  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding: 0.5rem;

  border-radius: 0.5rem;
  backdrop-filter: grayscale(1);
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
