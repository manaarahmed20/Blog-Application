import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => (
  <Nav>
    <Link href="/">Home</Link>
    <Link href="/create">Create Post</Link>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  background-color: #f0f0f0;
  padding: 10px;
`;

export default Navbar;
