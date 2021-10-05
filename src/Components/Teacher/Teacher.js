import React from 'react';
import { Card } from 'react-bootstrap';
const Teacher = (props) => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={props.image} />
                            <Card.Body>
                                <Card.Title>{props.name}</Card.Title>
                                <Card.Text>
                                    {props.discription}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;