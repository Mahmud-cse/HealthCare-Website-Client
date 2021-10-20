import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../img/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="customFooter">
             <Container className="pt-5">
                <Row>
                <Col lg="6">
                    <img className="mx-auto mb-4" src={logo} alt="logo" style={{width:"80px",marginLeft:"-40px"}}/>
                </Col>
                <Col lg="6">
                    <Row>
                        <Col xs="6" lg="4">
                            <ul className="list-unstyled" style={{color:"white"}}>
                                <li>About Our Service</li>
                                <li>Read Our Blog</li>
                                <li>Sign up to Read</li>
                                <li>Add your Account</li>
                            </ul>
                        </Col>
                        <Col xs="6" lg="4">
                            <ul className="list-unstyled" style={{color:"white"}}>
                                <li>Get Help</li>
                                <li>Read FAQs</li>
                                <li>View all cities</li>
                                <li>Available Doctor's</li>
                            </ul>
                        </Col>
                        <Col xs="6" lg="4">
                            <ul className="list-unstyled" style={{color:"white"}}>
                                <li>Facebook</li>
                                <li>Instragram</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                            </ul>

                        </Col>
                    </Row>
                    <br />
                    <br />
                        
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Footer;