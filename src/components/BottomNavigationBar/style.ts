import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 3rem;

  background-color: ${props => props.theme.darkgreen};
`;

export const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    cursor: pointer;
    user-select: none;
  }

  ${props =>
    props.active &&
    css`
      ${NavItemLabel} {
        color: ${props.theme.dark};
      }
      svg {
        fill: ${props.theme.dark};
      }
    `}
`;

export const NavItemLabel = styled.span`
  color: ${props => props.theme.white};
  font-size: 0.8rem;
`;
