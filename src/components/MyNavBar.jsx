import { Navbar, Nav } from "react-bootstrap";
const MyNavBar = ({ title }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features">Menu</Nav.Link>
          <Nav.Link href="#pricing">Reservations</Nav.Link>
          <Nav.Link href="#pricing">Find Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNavBar;
