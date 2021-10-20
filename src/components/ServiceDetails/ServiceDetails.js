import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import img1 from "../img/service-icon6.png";
import img2 from "../img/service-icon5.png";
import img3 from "../img/service-icon4.png";
import img4 from "../img/service-icon3.png";
import img5 from "../img/service-icon2.png";
import img6 from "../img/service-icon1.png";

const ServiceDetails = () => {
    const {serviceId}=useParams();
    let url,title;
    
    if(serviceId==="6"){
        // url="https://i.ibb.co/qdVsGbB/service-icon1.png";
        url=img6;
        title="Dental Care";
    }else if(serviceId==="5"){
        // url="https://i.ibb.co/jZwQ9Xv/service-icon2.png";
        url=img5;
        title="Eye Care";
    }else if(serviceId==="4"){
        // url="https://i.ibb.co/VYvH1jD/service-icon3.png";
        url=img4;
        title="Vacterial Vaginosis";
    }else if(serviceId==="3"){
        // url="https://i.ibb.co/rHcxs9G/service-icon4.png";
        url=img3;
        title="Heart Failure";
    }else if(serviceId==="2"){
        // url="https://i.ibb.co/SnxJwhY/service-icon5.png";
        url=img2;
        title="Mental Disorders";
    }else if(serviceId==="1"){
        // url="https://i.ibb.co/wSyTC5k/service-icon6.png";
        url=img1;
        title="Allergic Issue";
    }

    return (
        <div className="container mt-5 mb-5">
        <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Col md="12" lg="6">
                <h2 className="mb-4">{title}</h2>
                <p>At the height of the covid-19 pandemic, people often relied on telemedicine for doctor visits. Now, insurers are betting that some patients liked it enough to embrace new types of health coverage that encourages video visits — or outright insists on them.</p>

                <p>About one in six doctor's office visits by older Americans no longer takes place in an actual doctor's office</p>

                <p>After the initial months of hurdles and sleepless nights, doctors slowly got accustomed to deal with the situation</p>
            </Col>
            <Col md="12" lg="6">
                <img src={url} className="img-fluid w-100" alt="#" />
            </Col>
        </Row>
    </div>
    );
};

export default ServiceDetails;