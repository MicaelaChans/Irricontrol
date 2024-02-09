import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../../css/styles.css";

function NavBar() {
  return (
    <>
      <div className="containerNav">
        <Navbar
          bg="light"
          data-bs-theme="light"
          className="navbar navbar-expand-md shadow-sm"
        >
          <Container>
            <Navbar.Brand href="/">
              <img id="logo" src="./img/core-img/logo3.png" alt="Irricontrol" />
            </Navbar.Brand>
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#" className="nav-item">
                Inovación Irricontrol
              </Nav.Link>
              <Nav.Link href="#" className="nav-item">
                Servivios
              </Nav.Link>
              <Nav.Link href="#" className="nav-item">
                Huella Hídrica
              </Nav.Link>
              <Nav.Link href="#" className="nav-item">
                Nosotros
              </Nav.Link>
              <Button className="colorContact">Contacto</Button>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
