import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Responsive from '../React-Slick/ReactSlick';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Responsive></Responsive>
            <About></About>
        </div>
    );
};

export default Home;