import Navbar from './Navbar';
import styled from 'styled-components';

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    <Main>{children}</Main>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

export default Layout;
