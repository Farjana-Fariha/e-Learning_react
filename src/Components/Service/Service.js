import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Style from './Service.css'

const Service = (props) => {
    console.log(props.img)
    return (
        <div className='service-card'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.details}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;