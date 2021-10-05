import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

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
                <div className='row outsidemargin'>
                    <div className='col-xl-4'>
                        <Teacher name='Farjana Fariha' discription=' i am professional teacher with 6+ experience.' image={'http://www.nicdarkthemes.com/themes/education/html/demo/e-learning/img/avatar/avatar-chef-6.jpg'}></Teacher>
                    </div>
                    <div className='col-xl-4'>
                        <Teacher name='Ahsan Riad' discription=' i am professional teacher with 8+ experience.' image={'http://www.nicdarkthemes.com/themes/education/html/demo/e-learning/img/avatar/avatar-chef-7.jpg'}></Teacher>
                    </div>
                    <div className='col-xl-4'>
                        <Teacher name='Hafez Kurban' discription=' i am professional teacher with 2+ experience.' image={'http://www.nicdarkthemes.com/themes/education/html/demo/e-learning/img/avatar/avatar-chef-8.jpg'}></Teacher>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;