import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Container>
      <Navbar bg= "dark" variant='dark'>
        <Container>
          <Navbar.Brand href="#">App React</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header
