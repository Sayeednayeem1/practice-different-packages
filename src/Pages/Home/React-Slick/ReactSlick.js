import React, { Component } from "react";
import Slider from "react-slick";
import Slider1 from '../../../assets/images/Butterfly1.png';
import Slider2 from '../../../assets/images/Butterfly2.png';
import Slider3 from '../../../assets/images/Butterfly3.png';
import Slider4 from '../../../assets/images/Butterfly4.png';

export default class Responsive extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
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
            <div className="container mx-auto p-7 mt-6 mb-12">
                <h2 className="text-center text-red-200 text-2xl mb-5"> Responsive Slider</h2>
                <Slider {...settings}>
                    <div>
                        <img src={Slider1} alt="" />
                    </div>
                    <div>
                        <img src={Slider2} alt="" />
                    </div>
                    <div>
                        <img src={Slider3} alt="" />
                    </div>
                    <div>
                        <img src={Slider4} alt="" />
                    </div>
                    <div>
                        <img src={Slider1} alt="" />
                    </div>
                    <div>
                        <img src={Slider2} alt="" />
                    </div>
                    <div>
                        <img src={Slider3} alt="" />
                    </div>
                    <div>
                        <img src={Slider4} alt="" />
                    </div>
                </Slider>
            </div >
        );
    }
}