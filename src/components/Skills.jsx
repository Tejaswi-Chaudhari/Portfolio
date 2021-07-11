import React from 'react'
import { Slide } from "react-awesome-reveal";
import skillsLight from '../media/skills-light.svg';
import skillsDark from '../media/skills-dark.svg';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faDocker, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = ({darkMode}) => {
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <Slide>
            <Container>
                <Row>
                <Col lg={4} xs={12}>
                    <h1 className="display-3 skill-h">I can work <p className="with">with</p> </h1>
                    <img src={darkMode? skillsDark : skillsLight} alt="skills" className="skills-img img-fluid animated"/>
                </Col>
                <Col lg={2} xs={3}>
                    <br></br>
                    <Card>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faHtml5}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faCss3Alt}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faJs}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faReact}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faDocker}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <p align="center" className="skill-txt">C</p>
                    </Button>
                    </Card>
                </Col>
                <Col lg={6} xs={9}>
                    <br></br>
                    <Card className="skill-card">
                        <Card.Body>
                            <Card.Title>Programming Languages</Card.Title>
                            <Card.Text>C Programming, C++, GNU Octave, Python, JavaScript</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-card">
                        <Card.Body >
                            <Card.Title>Technologies</Card.Title>
                            <Card.Text>HTML, CSS, Bootstrap, Natural Language Processing, ReactJs, Docker, Cloud Firestore, Django, Django Rest Framework, SQLite</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-card">
                        <Card.Body >
                            <Card.Title>Others</Card.Title>
                            <Card.Text>MS office, Graphic Designing</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
            </Slide>
        </div>
    )
}

export default Skills
