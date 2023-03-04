import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from 'react-bootstrap/Form';
// import "./SampleTemplate.css";
import { Row, Col, Card, Button } from "react-bootstrap";


export default function SampleTemplate2() {
  return (
    <>
      <h3>The Sample Template 2 starts from here</h3>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NGO Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              // <Nav.Link href="#about">About us</Nav.Link>
              <Nav.Link href="#contact">Contact us</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  volunteer
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Donate</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="container-2">
        <h1 class="centered">Spread the love...</h1>
        <h3 class="centered">
          lets make them smile and provide good food and shelter
        </h3>
        <button className="centered">Donate </button>
      </Container>
      <div className="container grid row mx-auto">
        <h1>Choose the Template to start building your website!</h1>
        <Card style={{ width: "16rem" }} className="box mx-2 mt-3">
          <Card.Img
            variant="top"
            src="https://swechha.org/wp-content/uploads/2021/03/oa.jpg"
          />
          <Card.Body>
            <Card.Title>Template 1</Card.Title>
            <Card.Text>
              This template includes registration form for the volunteers also
              it includes the donation page for the citizens
            </Card.Text>
            <Button variant="primary">Vew Template</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem" }} className="box mx-2 mt-3">
          <Card.Img
            variant="top"
            src="https://crossbarriers.org/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-01-at-6.01.45-PM.jpeg"
          />
          <Card.Body>
            <Card.Title>Template 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Vew Template</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem" }} className="box mx-2 mt-3">
          <Card.Img
            variant="top"
            src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202109/senior_citizen-sixteen_nine.jpg"
          />
          <Card.Body>
            <Card.Title>Template 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Vew Template</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem" }} className="box mx-2 mt-3">
          <Card.Img
            variant="top"
            src="https://www.khaskhabar.com/s3-storage/khaskhabar/khaskhabarimages/img500/old-age-59-1497439434-226335-khaskhabar.jpg"
          />
          <Card.Body>
            <Card.Title>Template 4</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Vew Template</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem" }} className="box mx-2 mt-3">
          <Card.Img
            variant="top"
            src="https://swarnaviharoldagehomes.com/wp-content/uploads/2021/06/logo-swarnvihar.jpg"
          />
          <Card.Body>
            <Card.Title>Template 5</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Vew Template</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem" }} className="box mx-2 mt-3">
          <Card.Img
            variant="top"
            src="https://www.shutterstock.com/image-vector/senior-home-care-elderly-people-260nw-1667281402.jpg"
          />
          <Card.Body>
            <Card.Title>Template 6</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Vew Template</Button>
          </Card.Body>
        </Card>
        <h1 className="my-5">Register here to become a volunteer</h1>
        <Form.Group>     
        </Form.Group>
      </div>
      <Form className="signup-form">
                <Form.Group>
                    <Form.Control style={{ width:"470px" }} className="name-input mx-auto mt-4 px-2" type="text" placeholder="name" name="name"></Form.Control>
                    <Form.Control style={{ width:"470px" }} className="email-input mx-auto mt-4 px-2" type="text" placeholder="email" name="email" ></Form.Control>
                    <Form.Control style={{ width:"470px" }} className="text-input mx-auto mt-4 px-2" type="text" placeholder="city" name="email" ></Form.Control>
                    <Button className="submit-button mx-4 mt-4 px-5" value="submit" type="submit">submit</Button>
                </Form.Group>
            </Form>
    </>
  );
}
