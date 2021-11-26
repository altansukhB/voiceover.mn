import { Navbar, Nav, Container } from "react-bootstrap";

export default () => {
  return (
    <Container>
    <Navbar className="Nav-main" bg="transparent" expand="lg">
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <img src="/logo.png" />
      <Navbar.Collapse id="">
        <Nav className="ml-auto">
          <a className="fj-navbar-item" href="/">
            Нүүр
          </a>
          <a className="fj-navbar-item" href="/">
            Дуу оруулагч хайх
          </a>
          <a className="fj-navbar-item" href="/">
            Үнийн санал авах
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
};
