import { useState } from "react"
import {
  Navbar, Container, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavLink,
} from "react-bootstrap";
import { navbarItems, socialLinks } from "../constants/navbarItems";
import { capitalizeWord } from '../utils/globalUtils'
import logo from '../assets/logo.png'
import linkedin from '../assets/linkedin.svg'
import github  from '../assets/github.svg'
import whatsapp from '../assets/whatsapp.svg'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  
  const onUpdateActiveLink = (value) => setActiveLink(value);
  return (
    <Navbar expand="lg" >
      <Container>
        <NavbarBrand>
          <img src={logo} alt="Logo" height="100px" />
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggle>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              navbarItems.map((items) => (
                <NavLink
                  key={items.title}
                  href={items.href}
                  className={`${activeLink === items.title ? "active" : ""} navbar-link`}
                  onClick={() => onUpdateActiveLink(items.title)}
                >
                  {capitalizeWord(items.title)}
                </NavLink>
              ))
            }
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              {
                socialLinks.map((socialItems) => (
                  <a key={socialItems.title} href={socialItems.href}><img src={socialItems.imageSrc} alt={socialItems.title} /></a>
                ))
              }
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