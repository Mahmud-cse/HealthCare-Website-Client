import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css';
import img from '../img/service-thumbnail01.png';
import img2 from '../img/service-thumbnail02.png';
import img3 from '../img/service-thumbnail03.png';

const Home = () => {
    return (
        <>
            <div className="customHome">
                <div className="customHome2">
                    <h1 style={{color:"#444444"}}>Your Health Care is Our <br /> Purpose <a href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                    class="play-btn popup-youtube"><i class="fas fa-play-circle"></i></a></h1>
                    <h4 style={{color:"#999999"}}>A better Doctors , Clinics &amp; Labs . We'll help you find it</h4>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <Row>
                    <Col md="4">
                        <div className="d-flex flex-fill">
                        <img src={img} class="img-fluid" alt="#" />
                            <div class="service-thumbnail_text">
                                <h4>Specialised Service</h4>
                                <p>Internal Healthcare Communications <br /> Made Easy with SMS.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="d-flex flex-fill">
                        <img src={img2} class="img-fluid" alt="#" />
                            <div class="service-thumbnail_text">
                                <h4>24/7 Advanced Care</h4>
                                <p>Internal Healthcare Communications <br /> Made Easy with SMS.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="d-flex flex-fill">
                        <img src={img3} class="img-fluid" alt="#" />
                            <div class="service-thumbnail_text">
                                <h4>Get Result Online</h4>
                                <p>Internal Healthcare Communications <br /> Made Easy with SMS.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Home;