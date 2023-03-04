import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import "./Cards.css";

function GridExample() {
  return (
    <div className="container grid row mx-auto">
      <h1>Choose the Template to start building your website!</h1>
        

            <Card style={{ width: '16rem' }} className="box mx-2 mt-3">
                <Card.Img variant="top" src="https://colorlib.com/wp/wp-content/uploads/sites/2/lovecare-colorlib-template-353x278.jpg" />
                <Card.Body>
                    <Card.Title>Template 1</Card.Title>
                    <Card.Text>
                        This template includes registration form for the volunteers also it includes the donation page for the citizens
                    </Card.Text>
                    <Button variant="primary" href="/template1">Vew Template</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '16rem' }} className="box mx-2 mt-3">
                <Card.Img variant="top" src="https://freshdesignweb.com/wp-content/uploads/Kologi-Charity.jpg" />
                <Card.Body>
                    <Card.Title>Template 2</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button href="/template2" variant="primary">Vew Template</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '16rem' }} className="box mx-2 mt-3">
                <Card.Img variant="top" src="https://colorlib.com/wp/wp-content/uploads/sites/2/thecharity-free-template.jpg" />
                <Card.Body>
                    <Card.Title>Template 3</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Vew Template</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '16rem' }} className="box mx-2 mt-3">
                <Card.Img variant="top" src="https://colorlib.com/wp/wp-content/uploads/sites/2/thecharity-free-template.jpg" />
                <Card.Body>
                    <Card.Title>Template 4</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Vew Template</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '16rem' }} className="box mx-2 mt-3">
                <Card.Img variant="top" src="https://colorlib.com/wp/wp-content/uploads/sites/2/thecharity-free-template.jpg" />
                <Card.Body>
                    <Card.Title>Template 5</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Vew Template</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '16rem' }} className="box mx-2 mt-3">
                <Card.Img variant="top" src="https://colorlib.com/wp/wp-content/uploads/sites/2/thecharity-free-template.jpg" />
                <Card.Body>
                    <Card.Title>Template 6</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Vew Template</Button>
                </Card.Body>
            </Card>
            </div>
  );
}

export default GridExample;
