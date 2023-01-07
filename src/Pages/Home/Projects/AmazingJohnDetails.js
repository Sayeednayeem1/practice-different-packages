import React, { Component } from "react";
import 'animate.css';
import Slider from "react-slick";
import Img1 from '../../../assets/images/Amazing-John.png';
import Img2 from '../../../assets/images/Amazing-John2.png';
import Img3 from '../../../assets/images/Amazing-John3.png';

export default class AmazingJohnDetails extends Component {
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
            </div >
        );
    }
}
