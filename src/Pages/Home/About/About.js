import React from 'react';
import Lottie from 'lottie-react';
import SmileLottie from '../../../Smile.json';
import 'animate.css';

const About = () => {
    return (
        <div>
            <section className=" dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7 animate__animated animate__backInLeft">
                        <h1 className="max-w-2xl mb-4 text-2xl text-white font-bold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">This is a <br /> simple Practice App <br /> <span className='text-2xl'>Of new packages</span></h1>
                        <p className="max-w-2xl mb-6 font-light text-white dark:text-white lg:mb-8 md:text-lg lg:text-xl ">This is a simple testing React. js app. I am trying to implement new packages i didn't Used yet. So far i've used Lottie animation, Flowbite, React slick which i am not familiar with. <br/>Besides those technologies i also used tailwind css, row css, React js, react router dom and animate css. </p>
                        <a target='_blank' href="https://www.linkedin.com/in/sayeed-nayeem/" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 animate__animated animate__backInUp">
                            My Linkedin
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                    <div className=" lg:mt-0 hidden lg:col-span-5 lg:flex animate__animated animate__backInRight">
                        <Lottie animationData={SmileLottie} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;