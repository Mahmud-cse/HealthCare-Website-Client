import React, { useEffect } from 'react';
import { Card, CardGroup,Button, Row } from 'react-bootstrap';
import img1 from '../img/blog1.jpg';
import img2 from '../img/blog2.jpg';
import img3 from '../img/blog3.jpg';
import img4 from '../img/blog4.jpg';
import img5 from '../img/blog5.jpg';
import img6 from '../img/blog6.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
    return (        
        <div className="container p-5 mt-3 mb-3">
        <Row data-aos="fade-up">
        <CardGroup className="gap-5">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img1}/>
                <Card.Body>
                  <Card.Text>
                  Today, mental health care is at the forefront of Doctors Without Médecins Sans Frontiers projects.Change the System to Help Health Care Heroes.
                  </Card.Text>
                </Card.Body>
                  <div className="mx-auto mb-3">
                      <Button variant="outline-primary">READ MORE</Button>
                  </div>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img2}/>
                <Card.Body>
                  <Card.Text>
                  Today, mental health care is at the forefront of Doctors Without Médecins Sans Frontiers projects.Change the System to Help Health Care Heroes.
                  </Card.Text>
                </Card.Body>
                  <div className="mx-auto mb-3">
                      <Button variant="outline-primary">READ MORE</Button>
                  </div>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img3}/>
                <Card.Body>
                   <Card.Text>
                  Today, mental health care is at the forefront of Doctors Without Médecins Sans Frontiers projects.Change the System to Help Health Care Heroes.
                  </Card.Text>
                </Card.Body>
                  <div className="mx-auto mb-3">
                      <Button variant="outline-primary">READ MORE</Button>
                  </div>
              </Card>
          </CardGroup>
        </Row>
        {/* Second Row */}
        <Row className="mt-5" data-aos="fade-up">
        <CardGroup className="gap-5">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img4}/>
            <Card.Body>
              <Card.Text>
              Today, mental health care is at the forefront of Doctors Without Médecins Sans Frontiers projects.Change the System to Help Health Care Heroes.
              </Card.Text>
            </Card.Body>
              <div className="mx-auto mb-3">
                  <Button variant="outline-primary">READ MORE</Button>
              </div>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img5}/>
            <Card.Body>
              <Card.Text>
              Today, mental health care is at the forefront of Doctors Without Médecins Sans Frontiers projects.Change the System to Help Health Care Heroes.
              </Card.Text>
            </Card.Body>
              <div className="mx-auto mb-3">
                  <Button variant="outline-primary">READ MORE</Button>
              </div>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img6}/>
            <Card.Body>
              <Card.Text>
              Today, mental health care is at the forefront of Doctors Without Médecins Sans Frontiers projects.Change the System to Help Health Care Heroes.
              </Card.Text>
            </Card.Body>
              <div className="mx-auto mb-3">
                  <Button variant="outline-primary">READ MORE</Button>
              </div>
          </Card>
        </CardGroup>
        </Row>
        </div>
    );
};

export default Blogs;