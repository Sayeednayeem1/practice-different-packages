import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Responsive from '../React-Slick/ReactSlick';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Responsive></Responsive>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;