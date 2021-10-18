import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceList from '../ServiceList/ServiceList';

const Service = () => {
    const [items,setItems]=useState([]);

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setItems(data));
    },[])

    return (
        <Container>
            <Row>
                {
                    items.map(data=><ServiceList key={data.id} data={data}></ServiceList>)
                }
            </Row>
        </Container>
    );
};

export default Service;