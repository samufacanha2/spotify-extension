import { RiHome5Fill, RiSearchLine } from 'react-icons/ri';
import { Container, NavItem, NavItemLabel } from './style';

import { ImBooks } from 'react-icons/im';

const BottomNavigationBar: React.FC = () => {
  return (
    <Container>
      <NavItem active>
        <RiHome5Fill />
        <NavItemLabel>Home</NavItemLabel>
      </NavItem>
      <NavItem>
        <RiSearchLine />
        <NavItemLabel>Search</NavItemLabel>
      </NavItem>
      <NavItem>
        <ImBooks />
        <NavItemLabel>Library</NavItemLabel>
      </NavItem>
    </Container>
  );
};

export default BottomNavigationBar;
