import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import "./Cards.css";

function GridExample() {
  return (
    <Row xs={2} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col>
          <CardGroup class="my-card">
            <div class="row">
              <div class="column">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/564x/fa/ba/86/faba86feadde88a0615c5dec6442008a.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Template 1</Card.Title>
                    <Card.Text>
                      use this template for creating amazing website for your
                      NGO
                    </Card.Text>
                    <Card.Link href="#">
                      <Button varient="danger">View</Button>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div class="column">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/564x/fa/ba/86/faba86feadde88a0615c5dec6442008a.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Template 2</Card.Title>
                    <Card.Text>
                      use this template for creating amazing website for your
                      NGO
                    </Card.Text>
                    <Card.Link href="#">
                      <Button varient="danger">View</Button>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div class="column">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/564x/fa/ba/86/faba86feadde88a0615c5dec6442008a.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Template 2</Card.Title>
                    <Card.Text>
                      use this template for creating amazing website for your
                      NGO
                    </Card.Text>
                    <Card.Link href="#">
                      <Button varient="danger">View</Button>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </CardGroup>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
