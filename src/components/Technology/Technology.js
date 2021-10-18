import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../img/play-img.png';

const Technology = () => {
    return (
        <div className="container mt-5 mb-5">
        <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Col md="12" lg="6">
                <h2 className="mb-4">We Have Advanced Technologies</h2>
                <p>At the height of the covid-19 pandemic, people often relied on telemedicine for doctor visits. Now, insurers are betting that some patients liked it enough to embrace new types of health coverage that encourages video visits — or outright insists on them.</p>

                <p>About one in six doctor's office visits by older Americans no longer takes place in an actual doctor's office</p>

                <p>After the initial months of hurdles and sleepless nights, doctors slowly got accustomed to deal with the situation</p>
            </Col>
            <Col md="12" lg="6">
                <img src={img} className="img-fluid w-100" alt="#" />
            </Col>
        </Row>
    </div>
    );
};

export default Technology;