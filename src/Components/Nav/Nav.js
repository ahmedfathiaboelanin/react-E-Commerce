import React, { useContext } from "react";
import "./Nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsHandbag, BsShop } from "react-icons/bs";
import { loginContext } from '../../App'
import NavDropdown from "react-bootstrap/NavDropdown";


function BasicExample(props) {
   const logged = useContext(loginContext);
  return (
    <Navbar className="white" expand="md" sticky="">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <BsShop className="fs-2 fw-bold" style={{'color':'var(--btn)'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navlink" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/cart">
              <BsHandbag className="cartIcon" />
              <p className="count">{props.count}</p>
            </Nav.Link>
            {logged.logged ? (
              <>
                <NavDropdown
                  title={window.localStorage.getItem("user").split("@")[0]}
                  id="basic-nav-dropdown"
                  className="navlink text-center px-4 logout log"
                >
                  <NavDropdown.Item as={Link} to="/account">
                    Account
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      logged.setLogged(false);
                    }}
                  >
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link
                className="navlink log text-center px-4 login"
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;