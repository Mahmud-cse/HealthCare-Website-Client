import React from 'react';
import { Card, CardGroup,Button } from 'react-bootstrap';
import img1 from '../img/blog1.jpg';
import img2 from '../img/blog2.jpg';
import img3 from '../img/blog3.jpg';

const Blogs = () => {
    return (        
        <div className="container p-5 mt-3 mb-3">
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
        </div>
    );
};

export default Blogs;