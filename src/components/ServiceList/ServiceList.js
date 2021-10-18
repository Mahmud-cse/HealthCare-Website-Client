import React from 'react';
import { Card, Col,Button} from 'react-bootstrap';
import './ServiceList.css'; 

const ServiceList = (props) => {
    const {name,description,image}=props.data;

    return (
        <Col md={4} className="gap-5 mb-5 mt-5">
        <Card className="border-0 rounded-3 cardStyle">
                <Card.Img className="mt-3" variant="top" src={image} style={{width:"50%",height:"50%",margin:"auto"}}/>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text className="text-muted">
                    {description}
                  </Card.Text>
                </Card.Body>
                <div className="mx-auto mb-3">
                  <Button variant="outline-primary">READ MORE</Button>
                </div>
        </Card>
    </Col>
    );
};

export default ServiceList;