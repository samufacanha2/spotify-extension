import styled, { css } from 'styled-components';

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

export const TypeContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  padding: 0 0.5rem;
`;

interface TypeProps {
  active: boolean;
  type: string;
}

export const TypeItem = styled.div<TypeProps>`
  padding: 0.5rem;
  border-radius: 0.5rem;

  background-color: ${props =>
    props.active ? props.theme.darkgreen : props.theme.white};
  color: ${props => (props.active ? props.theme.white : props.theme.dark)};

  cursor: pointer;

  ${props =>
    props.type !== 'track' &&
    css`
      filter: grayscale(1) opacity(0.5);
      cursor: not-allowed;
    `}
`;
