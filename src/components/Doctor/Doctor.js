import React, { useEffect } from 'react';
import { Card, CardGroup,Button, Row } from 'react-bootstrap';
import img1 from '../img/team-1.png';
import img2 from '../img/team-2.png';
import img3 from '../img/team-3.png';
import img4 from '../img/team-4.jpg';
import img5 from '../img/team-5.jpg';
import img6 from '../img/team-6.jpg';
import img7 from '../img/team-7.jpg';
import img8 from '../img/team-8.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Doctor = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
    return (
        <div className="container p-5 mb-3">
            <h2 className="text-center mb-5 mt-2">Our Expert Doctors</h2>
            <Row data-aos="fade-up">
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
            </Row>
            {/* Second Row */}
            <Row className="mt-5" data-aos="fade-up">
            <CardGroup className="gap-5">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img5}/>
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
                <Card.Img variant="top" src={img6}/>
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
                <Card.Img variant="top" src={img7}/>
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
                <Card.Img variant="top" src={img8}/>
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
            </CardGroup>
            </Row>
        </div>
    );
};

export default Doctor;