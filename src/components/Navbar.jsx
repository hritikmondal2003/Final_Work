import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navbar.css';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand
          as={Link}
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: 'pointer' }}
          className="navbar-brand"
        >
          Hritik Mondal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              className="nav-link"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="nav-link"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="nav-link"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="nav-link"
              to="certificates"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Certificates
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="nav-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
