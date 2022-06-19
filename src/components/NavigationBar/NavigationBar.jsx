import React from "react";
import {Link, Outlet} from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';
import Footer from '../Footer/Footer.jsx'

const NavigationBar = () => {

    return(
        <>
            <Navbar bg="light" expand="lg" className="mb-3 shadow-sm p-3 bg-white">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Cocktail Avenue</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"> 
                        <Nav.Link as={Link} to='/' >Principal</Nav.Link>
                        <Nav.Link as={Link} to='/menu'>Menú</Nav.Link>
                        <Nav.Link as={Link} to='/reservation'>Reservar</Nav.Link>
                        {/* <Nav.Link as={Link} to='/blog'>Blog</Nav.Link> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet></Outlet>
            <Footer />
        </>
    );
}

export default NavigationBar;