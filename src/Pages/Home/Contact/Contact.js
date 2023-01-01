import React from 'react';
import Lottie from 'lottie-react';
import image from '../../../ContactMe.json';

const Contact = () => {
    return (
        <div>
            <h1 className='text-white dark:text-white font-bold text-center text-4xl mt-8'>Contact Me</h1>
            <section className="dark:bg-gray-900 mb-8">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-2xl text-white font-bold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">Contact Me <br /> Get In Touch</h1>
                        <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white"><span>Get in touch with me.</span> <br /> To contact me please use any method bellow.
                            I'd love to hear from you. And give me your valuable feedback. <br /> <span className='font-bold text-white'>Phone: +8801751589952</span><br /> <span className='font-bold text-white'>Email: sayeedn850@gmail</span></p>
                        <a target='_blank' href="https://www.linkedin.com/in/sayeed-nayeem/" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Linkedin
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a target='_blank' href="https://web.facebook.com/sayed.nayem.188" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Facebook
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a target='_blank' href="https://drive.google.com/file/d/1KKV1dAsGIhR7HisZgOYCbDbXS9v1-k-V/view?usp=sharing" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Resume
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                    <div className=" lg:mt-0 hidden lg:col-span-5 lg:flex">
                        <Lottie animationData={image} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;