import React from "react";
import {Card, Button} from 'react-bootstrap';

const Cards = ({data}) => {

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.img_path} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                    <Button variant="primary" className='mt-auto'>Agregar</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Cards;