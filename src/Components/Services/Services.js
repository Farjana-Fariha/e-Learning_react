import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import Style from './Services.css'

const Services = () => {
    const [services] = useServices();
    return (
        <div id='service' className='services'>
            <h1>Our Services</h1>
            {
                services.slice(1, 4).map(service => <Service img={service.img} title= {service.title} details = {service.details}></Service>)
            }
            

        </div>
    );
};

export default Services;