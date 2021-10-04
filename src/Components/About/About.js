import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div className='breadcrumb'>
                <h2 className='text-center'>About us</h2>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-6 extra_class'>
                        <div className='center'>
                            <h2>Hello. Our school has been present for over 20 years in the market. We make the most of all our students.
                            </h2>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <div className='row'>
                            <div className='col-xl-6 extra_class'>
                                <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis</p>
                            </div>
                            <div className='col-xl-6 extra_class'>
                                <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis</p>
                            </div>
                            <div className='col-xl-6 extra_class'>
                                <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis</p>
                            </div>
                            <div className='col-xl-6 extra_class'>
                                <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;