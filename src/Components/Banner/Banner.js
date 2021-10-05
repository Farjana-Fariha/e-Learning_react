import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import style from './Banner.css';
import imageBanar from '../../img/Banar.jpg';

const Banner = () => {
    return (
        <div className='banner'>
            <img src={imageBanar} />
            <div className='inner_content'>
                <h1>Find the Best Courses</h1>
                <h4>All the top courses – from our school and the best our teachers.</h4>
                <Button href="#service" variant='success mt-3'>Services Below</Button>
            </div>
        </div>
    );
};

export default Banner;