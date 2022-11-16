import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Background = styled.div<{ isOpen: boolean }>`
  min-width: 100%;
  min-height: 100%;

  background-color: rgba(0, 0, 0, 0.85);

  visibility: hidden;
  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  ${props =>
    props.isOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  border-radius: 0.5rem;

  overflow-y: hidden;
  height: 70%;
  width: 90%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(255, 255, 255, 0.3);

  transform: translate(5%, 15%);
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

  padding-right: 0.5rem;

  ::-webkit-scrollbar {
    width: 0.25rem;
    z-index: 1;
  }
  ::-webkit-scrollbar-track {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    box-shadow: none;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.white};

    border-radius: 10px;
  }
`;

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding: 0.5rem;

  background-color: ${props => darken(0.1, props.theme.darkgreen)};

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

export const LoadingMore = styled.div``;
