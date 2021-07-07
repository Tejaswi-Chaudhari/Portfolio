import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './styles.css'

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="navbar">
                <Navbar.Brand href="#" className="navname">Welcome!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#" className="link">About me</Nav.Link>
                    <Nav.Link href="#" className="link">Skills</Nav.Link>
                    <Nav.Link href="#" className="link">Projects</Nav.Link>
                    <Nav.Link href="#" className="link">Certifications</Nav.Link>
                    <Nav.Link href="#" className="link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
