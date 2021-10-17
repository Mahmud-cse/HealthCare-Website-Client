import React from 'react';
import {Container, Nav, Navbar, Stack,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import image from '../img/logo.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
        <Navbar className="bg-light" collapseOnSelect expand="lg">
          {/* container */}
          <Container>
          <Navbar.Brand href="/home">
                     <img
                        src={image}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* stack */}
            <Stack direction="horizontal" gap={3}>
            {/* <i class="fas fa-shopping-cart"></i> */}
                <NavLink to="/home" className="f-13" style={{color:"black"}}   activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}>Home</NavLink>
                <NavLink to="/doctors" className="f-13" style={{color:"black"}}   activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}>Doctors</NavLink>
                {/* <NavLink to="/about" className="f-13" style={{color:"black"}}   activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}>About</NavLink> */}
                <NavLink to="/blogs" className="f-13" style={{color:"black"}}   activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}>Blogs</NavLink>
                <NavLink to="/login" className="f-13" style={{color:"black"}}   activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}>Login</NavLink>

                <NavLink to="/register" className="f-13"   activeStyle={{
                  color: "white"
                }}>
                     <Button variant="dark" className="rounded-pill">Register</Button>
                </NavLink>
            </Stack>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
    );
};

export default NavBar;