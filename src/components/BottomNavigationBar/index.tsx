import { RiHome5Fill, RiSearchLine } from 'react-icons/ri';
import { Container, NavItem, NavItemLabel } from './style';

import { ImBooks } from 'react-icons/im';
import { useNavigate } from 'react-router';

const BottomNavigationBar: React.FC = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/feed');
  };

  return (
    <Container>
      <NavItem active onClick={handleHome}>
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
