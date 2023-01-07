import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Responsive from '../React-Slick/ReactSlick';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Responsive></Responsive>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;