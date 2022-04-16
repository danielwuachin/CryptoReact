import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
          <Nav.Link as={NavLink} to="/single">
            single
          </Nav.Link>
          <Nav.Link as={NavLink} to="/">
            single
          </Nav.Link>
        </Container>
      </Navbar>

      <section className="mx-4">
        <Outlet />
      </section>
    </>
  );
};

export default Header;
