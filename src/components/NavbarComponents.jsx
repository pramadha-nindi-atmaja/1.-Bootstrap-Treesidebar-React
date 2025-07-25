import { Container, Image, Nav, NavDropdown, Navbar, Badge } from "react-bootstrap";

const NavbarComponents = () => {
  const avatar = (
    <Image
      src={"/img/img_avatar.png"}
      alt="User"
      roundedCircle
      style={{ width: "30px" }}
    />
  );

  return (
    <Navbar bg="body-tertiary" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#home">
          <strong>POS APP</strong>
          <Badge bg="primary" className="ms-2">Beta</Badge>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#notifications" className="me-2">
              <i className="bi bi-bell"></i>
            </Nav.Link>
            <NavDropdown
              title={
                <span className="d-flex align-items-center">
                  {avatar} <span className="ms-2">Pojok Code</span>
                </span>
              }
              id="collapsible-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#">
                <i className="bi bi-person me-2"></i>Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <i className="bi bi-gear me-2"></i>Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">
                <i className="bi bi-box-arrow-right me-2"></i>Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponents;