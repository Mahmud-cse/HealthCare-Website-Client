import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css';
import img from '../img/service-thumbnail01.png';
import img2 from '../img/service-thumbnail02.png';
import img3 from '../img/service-thumbnail03.png';
import img4 from '../img/about.jpg';

const Home = () => {
    return (
        <>
            <div className="customHome">
                <div className="customHome2">
                    <h1 style={{color:"#444444"}}>Your Health Care is Our <br /> Purpose <a href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                    className="play-btn popup-youtube"><i className="fas fa-play-circle"></i></a></h1>
                    <h4 style={{color:"#999999"}}>A better Doctors , Clinics &amp; Labs . We'll help you find it</h4>
                </div>
            </div>
            <div className="container customHome3">
                <Row>
                    <Col md="4">
                        <div className="d-flex flex-fill">
                        <img src={img} className="img-fluid" alt="#" />
                            <div className="service-thumbnail_text">
                                <h4>Specialised Service</h4>
                                <p>Internal Healthcare Communications <br /> Made Easy with SMS.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="d-flex flex-fill">
                        <img src={img2} className="img-fluid" alt="#" />
                            <div className="service-thumbnail_text">
                                <h4>24/7 Advanced Care</h4>
                                <p>Internal Healthcare Communications <br /> Made Easy with SMS.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="d-flex flex-fill">
                        <img src={img3} className="img-fluid" alt="#" />
                            <div className="service-thumbnail_text">
                                <h4>Get Result Online</h4>
                                <p>Internal Healthcare Communications <br /> Made Easy with SMS.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="container mt-5 mb-5">
                <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Col md="12" lg="6">
                        <img src={img4} className="img-fluid w-100" alt="#" />
                    </Col>
                    <Col md="12" lg="6">
                        <h2>Short Story About Our Service</h2>
                        <p>At the height of the covid-19 pandemic, people often relied on telemedicine for doctor visits. Now, insurers are betting that some patients liked it enough to embrace new types of health coverage that encourages video visits — or outright insists on them.</p>

                        <p>About one in six doctor's office visits by older Americans no longer takes place in an actual doctor's office</p>

                        <p>After the initial months of hurdles and sleepless nights, doctors slowly got accustomed to deal with the situation</p>

                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="Homeblue">
                                    <h3>1000+</h3>
                                    <span>Happy Patients</span>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="Homegreen">
                                    <h3>215+</h3>
                                    <span>Expert Doctors</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="Homeblack">
                                    <h3>315+</h3>
                                    <span>Expert Doctors</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="Homered">
                                    <h3>105+</h3>
                                    <span>Expert Doctors</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Home;