import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About, Skills } from './components'
import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import './components/styles.css'

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  return (
    <Router>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <Switch>
        <Route exact path="/">
          <Navbar sticky="top" expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
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
                    <Button onClick={toggleDarkMode} variant={darkMode ? "outline-light" : "outline-dark"}>
                        {darkMode ? "Light Mode" : "Dark Mode"} <FontAwesomeIcon className="dark" size="lg" icon={faAdjust} spin/>
                    </Button>
            </Navbar.Collapse>
          </Navbar>
          <hr></hr>
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
