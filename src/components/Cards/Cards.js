import React from "react";
import {Card,Button} from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import "./Cards.css";
export default function Cards() {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://i.pinimg.com/564x/fa/ba/86/faba86feadde88a0615c5dec6442008a.jpg" />
          <Card.Body>
            <Card.Title>Template 1</Card.Title>
            <Card.Text>
              for template 1
            </Card.Text>
            <Button varient="danger">View</Button>
          </Card.Body>
         
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.pinimg.com/564x/fa/ba/86/faba86feadde88a0615c5dec6442008a.jpg" />
          <Card.Body>
            <Card.Title>Template 2</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Button varient="danger">View</Button>

          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.pinimg.com/564x/fa/ba/86/faba86feadde88a0615c5dec6442008a.jpg" />
          <Card.Body>
            <Card.Title>Template 2</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Button varient="danger">View</Button>

          </Card.Body>
          
        </Card>
      </CardGroup>
    </div>
  );
}
