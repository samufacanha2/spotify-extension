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

  background-color: rgba(255, 255, 255, 0.9);

  color: ${props => props.theme.dark};

  transform: translate(5%, 15%);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 0.5rem;
  width: 100%;

  h1 {
    color: ${props => props.theme.dark};
  }
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

export const PlaylistNameInput = styled.input`
  width: 100%;
  height: 2rem;

  padding: 0.5rem;

  border-radius: 0.5rem;

  border: 1px solid ${props => props.theme.dark};
`;

export const PlaylistDescriptionInput = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  min-height: 4rem;

  padding: 0.5rem;

  border-radius: 0.5rem;

  background-color: transparent;
  border: 1px solid ${props => props.theme.dark};
`;

export const CreateButton = styled.button`
  width: 100%;
  height: 2rem;

  padding: 0.5rem;

  border-radius: 0.5rem;

  background-color: ${props => props.theme.white};

  border: none;
`;

export const StyledCheckbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;

  border-radius: 0.5rem;

  border: none;

  background-color: ${props => props.theme.white};

  &:checked {
    background-color: ${props => props.theme.dark};
  }
`;
