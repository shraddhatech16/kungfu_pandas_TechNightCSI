import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import './SampleTemplate.css'
function SampleTemplate() {
    return (
        <>
            <div className=' grid row mx-auto'>
            <h3>The Sample template Starts from here</h3>
            <button>Download code</button>

            </div>
            
            <Navbar bg="light" expand="lg" className='navbar-dark bg-dark'>
                <Container>
                    <Navbar.Brand href="#home">NGO Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                            <NavDropdown title="Register" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Volunteer</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Donar
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <Container className='container-1'>
                <h1 class="centered">NGO FOR BIRDS PROTECTION AND SAFETY!</h1>
                <p class="centered-1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis, accusantium, quod modi non ducimus, fuga explicabo quas officia iure ipsam nisi optio? Eius iure blanditiis deserunt commodi odit eum.</p>
                <button className='centered-2'>Contribute for BIRDS</button>
            </Container>
            <h1>Events we held for Bird Protection and Safety</h1>
            <div className="container grid row mx-auto">
            <Card style={{ width: '16rem', color:"white" }} className="box mx-2 mt-3 bg-dark">
                <Card.Img variant="top" src="http://1.bp.blogspot.com/-U3VJUfkFmwo/UeLJtLx7MiI/AAAAAAAADj4/wi4IAQDN4BM/s400/Cardinal-Bird-Facts.jpg" />
                <Card.Body>
                    <Card.Title>Event 1</Card.Title>
                    <Card.Text>
                        This template includes registration form for the volunteers also it includes the donation page for the citizens
                    </Card.Text>
                    <Button variant="primary">Vew Template</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '16rem', color:"white" }} className="box mx-2 mt-3 bg-dark">
                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.gDxS-BbYKZrEP82JTT1jIwHaE6?pid=ImgDet&rs=1" />
                <Card.Body>
                    <Card.Title>Event 2</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Vew Template</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '16rem', color:"white" }} className="box mx-2 mt-3 bg-dark">
                <Card.Img variant="top" src="https://th.bing.com/th/id/R.fe9c149c1aa809100a4599562cb633c7?rik=rcbk19LfHFAfyg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-TA1D79yxcnM%2fTyy6ng42rbI%2fAAAAAAAAAnc%2f-4s-bZaYc_U%2fs1600%2fcolorfull%2bbird%2bHD%2bwallpaper.jpg&ehk=S0xpMdMsjpcYrfFGp2CJ6feh4CeS%2fyQLoAC%2bqsBPPY4%3d&risl=&pid=ImgRaw&r=0" />
                <Card.Body>
                    <Card.Title>Event 3</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Vew Template</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '16rem', color:"white" }} className="box mx-2 mt-3 bg-dark">
                <Card.Img variant="top" src="https://3.bp.blogspot.com/-z3mz1trqGP4/WHiruYFMe0I/AAAAAAAAP8Y/Mh72br4Ibes6UcVx0-2aEUD0EolQn0qaACLcB/s1600/WTACN1484303116.jpg" />
                <Card.Body>
                    <Card.Title>Event 4</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Vew Template</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '16rem', color:"white" }} className="box mx-2 mt-3 bg-dark">
                <Card.Img variant="top" src="https://3.bp.blogspot.com/-z3mz1trqGP4/WHiruYFMe0I/AAAAAAAAP8Y/Mh72br4Ibes6UcVx0-2aEUD0EolQn0qaACLcB/s1600/WTACN1484303116.jpg" />
                <Card.Body>
                    <Card.Title>Template 4</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Vew Template</Button>
                </Card.Body>
            </Card>
            <h1>Register as a Volunteer!</h1>
            <div className="container">
            <Form className="signup-form">
                <Form.Group>
                    <Form.Control style={{ width:"470px" }} className="name-input mx-auto mt-4 px-2" type="text" placeholder="name" name="name"></Form.Control>
                    <Form.Control style={{ width:"470px" }} className="email-input mx-auto mt-4 px-2" type="text" placeholder="email" name="email" ></Form.Control>
                    <Form.Control style={{ width:"470px" }} className="text-input mx-auto mt-4 px-2" type="text" placeholder="city" name="email" ></Form.Control>
                    <Button className="submit-button mx-4 mt-4 px-5" value="submit" type="submit">submit</Button>
                </Form.Group>
            </Form>
            </div>

            </div>
        </>

    )
}

export default SampleTemplate