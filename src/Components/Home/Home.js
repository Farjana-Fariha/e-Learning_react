import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Banner/Footer/Footer';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;