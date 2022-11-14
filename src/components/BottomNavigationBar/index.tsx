import { RiHome5Fill, RiSearchLine } from 'react-icons/ri';
import { Container, NavItem, NavItemLabel } from './style';

import { useState } from 'react';
import { ImBooks } from 'react-icons/im';
import { useNavigate } from 'react-router';

const BottomNavigationBar: React.FC = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/feed');
    setActive(0);
  };

  const handleSearch = () => {
    navigate('/search');
    setActive(1);
  };

  const handleLibrary = () => {
    navigate('/playlists');
    setActive(2);
  };

  return (
    <Container>
      <NavItem active={active === 0} onClick={handleHome}>
        <RiHome5Fill />
        <NavItemLabel>Home</NavItemLabel>
      </NavItem>
      <NavItem active={active === 1} onClick={handleSearch}>
        <RiSearchLine />
        <NavItemLabel>Search</NavItemLabel>
      </NavItem>
      <NavItem active={active === 2} onClick={handleLibrary}>
        <ImBooks />
        <NavItemLabel>Library</NavItemLabel>
      </NavItem>
    </Container>
  );
};

export default BottomNavigationBar;
