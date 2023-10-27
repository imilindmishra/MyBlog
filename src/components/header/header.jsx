import { AppBar, Toolbar, Typography, styled } from "@mui/material";

import { Link } from 'react-router-dom';

const Component = styled(AppBar)`
  background-color: #fff;
  color: #000;
`;

const Container = styled(Toolbar)`
  display: flex;
  flex-direction: row; /* Set the flex direction to row */
  align-items: center; /* Center items vertically */
  justify-content: space-between; /* Optional: Add space between items */
  position: absolute;
  top: 0;
  right: 20px;
  & > a{
    padding: 20px;
    color: #000;
    text-decoration: none;
  };

  ::after {
    content: "";
    width: 1200px;
    height: 1px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ccc;
  }
`;




const Header = () => {
  return (
    <Component>
      <Container>
        <Link to='/' marginRight={7}>Home</Link>
        <Link to='/about' marginRight={7}>About</Link>
        <Link to='/contact' marginRight={7}>Contact</Link>
        <Link to='/login'>Logout</Link>
      </Container>
    </Component>
  );
};

export default Header;
