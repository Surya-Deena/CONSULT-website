import "./Styles/Nav.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <>
    <Navbar bg="light" expand="lg" className="py-4">
      <Container fluid className="px-5 ">
        <Navbar.Brand className="ms-lg-3">
          <img src="../logos/logo.webp" alt="digitalfactoryindia" style={{width:180}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 gap-4 "
            navbarScroll
          >
            <Nav.Link>HOME</Nav.Link>
            <Nav.Link>ABOUT US</Nav.Link>
            <NavDropdown title="OUR SERVICES" id="dropdown-basic-button">
              <NavDropdown.Item>WEB DEVELOPMENT</NavDropdown.Item>
              <NavDropdown.Item>SOCIAL MEDIA MARKETING</NavDropdown.Item>
              <NavDropdown.Item>SEO</NavDropdown.Item>
              <NavDropdown.Item>
                BRANDING AND CRATIVE DESINGNING
              </NavDropdown.Item>
              <NavDropdown.Item>ECOMMERCE</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">CAREERS</Nav.Link>
            <Nav.Link href="#">BLOG</Nav.Link>
            <Nav.Link href="#">CONTACT US</Nav.Link>
          </Nav>
          <Form className=" d-flex d-none d-lg-inline-block">
            <div className="row">

            <div className="col-2 rounded-pill nav-ic ps-2 pe-3  py-2 me-3 ">
              <i class="fa-solid fa-magnifying-glass my-auto me-2 "></i>
            </div>
            <Button className= "col-9 ot btn-rouded-pill fw-bold px-4 py-2">GET A QUOTE</Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
