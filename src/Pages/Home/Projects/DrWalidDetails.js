import React, { Component } from "react";
import 'animate.css';
import Slider from "react-slick";
import Img1 from '../../../assets/images/DoctorWalid.png';
import Img2 from '../../../assets/images/DoctorWalid2.png';
import Img3 from '../../../assets/images/DoctorWalid3.png';

export default class DrWalidDetails extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        };
        return (
            <div className="container mx-auto p-7 mt-6 mb-6 animate__animated animate__slideInLeft">
                <div>
                    <h2 className="text-center text-white font-bold text-2xl mb-5">Slide With Me!</h2>
                    <Slider {...settings}>
                        <div >
                            <img className="lg:max-w-3xl" src={Img1} alt="" />
                        </div>
                        <div >
                            <img className="lg:max-w-3xl" src={Img2} alt="" />
                        </div>
                        <div>
                            <img className="lg:max-w-3xl" src={Img3} alt="" />
                        </div>
                        <div>
                            <img className="lg:max-w-3xl" src={Img1} alt="" />
                        </div>
                        <div>
                            <img className="lg:max-w-3xl" src={Img2} alt="" />
                        </div>
                        <div>
                            <img className="lg:max-w-3xl" src={Img3} alt="" />
                        </div>
                        <div>
                            <img className="lg:max-w-3xl" src={Img1} alt="" />
                        </div>
                        <div>
                            <img className="lg:max-w-3xl" src={Img2} alt="" />
                        </div>
                        <div>
                            <img className="lg:max-w-3xl" src={Img3} alt="" />
                        </div>
                    </Slider>
                </div>
                <h1 className="text-5xl font-bold text-white text-center mt-14 mb-12">Website Details</h1>
                <div className="bg-white dark:bg-gray-900">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <img className="w-full dark:hidden" src={Img1} alt="" />
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Dr. Walid</h2>
                            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">1. This is a buy and sale website. In the home page there are some details of product categories. <br />
                                2. If you click on the categories it will take you to the product page. <br />
                                3. There is of course login and sign up route you can sign up or login anytime. <br />
                                4. Also there is one particular admin. Only admin can make some one admin. <br />
                                5. Also a seller can add the product he/she wanna sell. <br />
                                6. There are plenty of options for a buyer to buy theres lots and lots of products. <br /></p>
                            <a target='_blank' rel="noreferrer" href="https://dr-walid-client.web.app/" className="inline-flex items-center text-white btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 mr-2 mt-1">
                                Live Website
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://github.com/Sayeednayeem1/b6a11-service-review-client" className="inline-flex items-center btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 mt-1 mr-2">
                                GitHub Client
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://github.com/Sayeednayeem1/b6a11-service-review-server" className="inline-flex items-center btn btn-primary border-none bg-gradient-to-r from-purple-600 to-blue-600 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 mt-1">
                                GitHub Server
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

// DrWalidDetails