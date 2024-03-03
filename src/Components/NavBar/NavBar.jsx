import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cookies from "js-cookie";
import { GiGraduateCap } from "react-icons/gi";
import "./NavBar.css";

const NavBar = () => {
  const [userRole, setUserRole] = useState(localStorage.getItem("user"));

  const handleUserLogout = () => {
    localStorage.setItem("user", "");
    window.location.reload();
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="position-sticky top-0 left-0 bg-body-tertiary z-3 nav-bar"
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            {" "}
            <GiGraduateCap className="brand-icon" />
            <h3 className="brand-name">Parho.Pk</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav className="nav-user">{userRole}</Nav>
              <Nav.Link href="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/courses" className="nav-link">
                Courses
              </Nav.Link>
              {userRole === "" || userRole === null ? (
                <>
                  <Nav.Link href="/login">
                    <button className="btn btn-primary-custom">Login</button>
                  </Nav.Link>
                  <Nav.Link href="/signup">
                    <button className="btn btn-secondary-custom">Signup</button>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={handleUserLogout}>
                  <button className="btn btn-primary-custom">Logout</button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
