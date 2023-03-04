import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p>We help NOGs to create beautiful websites on their finger tips for the NGOs</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi tempore error distinctio, corrupti provident ullam ab doloremque explicabo nisi consectetur veniam amet similique nostrum dolorum voluptatum natus ad quidem!</p>
            <h1>Our Team</h1>
            <div className="container grid row mx-auto">
            <Card style={{ width: '18rem' }} className="box mx-2 mt-3">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box mx-2 mt-3">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box mx-2 mt-3">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default About