import React from 'react';
import Service from '../Components/Service/Service';
import useServices from '../Hooks/useServices';

const NavService = () => {
    const [services] = useServices();
    return (
        <div>
            <h1>Our Services</h1>
            {
                services.map(service => <Service img={service.img} title= {service.title} details = {service.details}>
                </Service>)
            }
        </div>
    );
};

export default NavService;