import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Nav.Link
            as={NavLink}
            to="/"
            className=" fs-4 fw-bolder rounded border border-secondary"
          >
            {`< Home`}
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
