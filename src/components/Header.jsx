import React from 'react'
import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

    return (
        <div>
            <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
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
                        <Button onClick={toggleDarkMode} variant="outline-dark">
                            {darkMode ? "Light Mode" : "Dark Mode"} <FontAwesomeIcon className="dark" size="lg" icon={faAdjust} />
                        </Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
