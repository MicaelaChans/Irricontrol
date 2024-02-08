import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <div className="container">
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Irricontrol</Nav.Link>
              <Nav.Link href="#">Huella Hidrica</Nav.Link>
              <Nav.Link href="#">Servivios</Nav.Link>
              <Nav.Link href="#">Nosotros</Nav.Link>
              <button className="btn btn-primary">Contacto</button>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
