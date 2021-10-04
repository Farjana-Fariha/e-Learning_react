import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className='breadcrumb'>
                <h2 className='text-center'>Contact us</h2>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-6'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className='col-xl-6'>
                        <div className='login_image'>
                            <img src='https://media.istockphoto.com/photos/login-and-password-cyber-security-concept-data-protection-and-secured-picture-id1271787791?b=1&k=20&m=1271787791&s=170667a&w=0&h=riIFl9T6XhZgLYlSoTLdvvFf0JQpnmsoFyUW82MRP9c='></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;