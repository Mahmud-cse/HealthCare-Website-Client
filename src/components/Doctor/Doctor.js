import React from 'react';
import { Card, CardGroup,Button } from 'react-bootstrap';
import img1 from '../img/team-1.png';
import img2 from '../img/team-2.png';
import img3 from '../img/team-3.png';
import img4 from '../img/team-4.jpg';

const Doctor = () => {
    return (
        <div className="container p-5 mb-3">
            <h2 className="text-center mb-5 mt-2">Our Expert Doctors</h2>
            <CardGroup className="gap-5">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img1}/>
                  <Card.Body>
                    <Card.Title className="text-center">Dr. LEONARD</Card.Title>
                    <Card.Text>
                    Today, mental health care is at the forefront of Doctors Without Médecins Sans Frontiers projects.
                    </Card.Text>
                  </Card.Body>
                    <div className="mx-auto mb-3">
                        <Button variant="outline-primary">Book Now</Button>
                    </div>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title className="text-center">Dr. HANI</Card.Title>
                    <Card.Text>
                    Today, mental health care is at the forefront of Doctors Without Médecins Sans Frontiers projects.
                    </Card.Text>
                  </Card.Body>
                  <div className="mx-auto mb-3">
                        <Button variant="outline-primary">Book Now</Button>
                  </div>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img3} />
                  <Card.Body>
                    <Card.Title className="text-center">Dr. JOHN</Card.Title>
                    <Card.Text>
                    Today, mental health care is at the forefront of Doctors Without Médecins Sans Frontiers projects.
                    </Card.Text>
                  </Card.Body>
                  <div className="mx-auto mb-3">
                        <Button variant="outline-primary">Book Now</Button>
                  </div>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img4} />
                  <Card.Body>
                    <Card.Title className="text-center">Dr. GERTY</Card.Title>
                    <Card.Text>
                    Today, mental health care is at the forefront of Doctors Without Médecins Sans Frontiers projects.
                    </Card.Text>
                  </Card.Body>
                  <div className="mx-auto mb-3">
                        <Button variant="outline-primary">Book Now</Button>
                  </div>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Doctor;