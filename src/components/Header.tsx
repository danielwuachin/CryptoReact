import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="../assets/img/crypto7-light.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="crypto7-logo"
            />
          </Navbar.Brand>
          <Nav.Link as={NavLink} to="/">
            home
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
