import { useState, useEffect } from "react"
import {
  Navbar, Container, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavLink,
} from "react-bootstrap";
import logo from '../assets/logo.png'
import linkedin from '../assets/linkedin.svg'
import github  from '../assets/github.svg'
import whatsapp from '../assets/whatsapp.svg'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => setActiveLink(value);
  return (
    <Navbar expand="lg" className={ scrolled ? "scrolled" : "" }>
      <Container>
        <NavbarBrand>
          <img src={logo} alt="Logo" height="100px" />
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggle>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              href="#"
              className={`${activeLink === "home" ? "active" : ""} navbar-link`}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </NavLink>
            <NavLink
              href="#"
              className={`${activeLink === "skills" ? "active" : ""} navbar-link`}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </NavLink>
            <NavLink
              href="#"
              className={`${activeLink === "projects" ? "active" : ""} navbar-link`}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </NavLink>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/margarita-syddall/"><img src={linkedin} alt="Linkedin" /></a>
              <a href="https://github.com/MargaritaSyd"><img src={github} alt="Github" /></a>
              <a href="/"><img src={whatsapp} alt="Whatsapp" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('button')}>
              <span>Let's connect!</span>
            </button>
          </span>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}