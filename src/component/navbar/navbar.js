import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Navbar,Nav } from 'react-bootstrap';
function NavbarCom(params) {
    return(
    <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="/">Triceria Food Ordering Web App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
    );


}
export default NavbarCom;