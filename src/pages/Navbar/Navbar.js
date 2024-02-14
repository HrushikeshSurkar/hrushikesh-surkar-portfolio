// NavbarComponent.js

import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSection = (sectionId) => {
    const destination = document.getElementById(sectionId);
    if (destination) {
      destination.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section with ID ${sectionId} not found`);
    }
  };

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container fluid className="navbar-container">
        <Navbar.Brand href="#home" className="logo">
          PORTFOLIO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <GiHamburgerMenu className="hamburger-menu" onClick={toggleMenu} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className={`mx-auto main-menu ${isOpen ? "show" : ""}`}>
            <Nav.Link
              href="#home"
              className="nav-link"
              onClick={() => {
                toggleMenu();
                navigateToSection("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="nav-link"
              onClick={() => {
                toggleMenu();
                navigateToSection("about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="nav-link"
              onClick={() => {
                toggleMenu();
                navigateToSection("projects");
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="nav-link"
              onClick={() => {
                toggleMenu();
                navigateToSection("contact");
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="social-links mobile-social-links">
            <Nav.Link
              href="https://www.linkedin.com/in/hrushikesh-surkar-0055611b6/"
              className="nav-link"
            >
              <FaLinkedin color="#0e76a8" />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/HrushikeshSurkar"
              className="nav-link"
            >
              <IoLogoGithub color="#211F1F" />
            </Nav.Link>
            <Nav.Link
              href="https://www.youtube.com/channel/UCZItHElmS_X6l7yIWgNKHTg"
              className="nav-link"
            >
              <FaYoutube color="#FF0000" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
