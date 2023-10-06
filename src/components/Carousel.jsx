import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/crousel.css'; // You can create your own CSS for styling
import img1 from "../assets/slider1.avif";
import img2 from "../assets/slider2.avif";
import img3 from "../assets/slider.avif";
import { AiOutlineArrowRight } from "react-icons/ai";


const Carousel = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000, // Time in milliseconds between slides
        centerMode: true,
        centerPadding: '0',
        // infinite: true,
        slidesToShow: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="carousel-container" stye>
            <Slider {...settings}>
                <div className="carousel-item img1" >
                    <img src={img1} alt="" style={{ height: "400px", width: "100%" }} />
                </div>
                <div className="carousel-item img2">
                    <img src={img2} alt="" style={{ height: "400px", width: "100%" }} />

                </div>
                <div className="carousel-item">
                    <div className="carousel-box" >
                        <div className="slider-box">
                            <p className='slider-para1'>Supporting city skin</p>
                            <p className='slider-para2'>Parsley Seed Anti-Oxidant Intense <br /> Serum</p>
                            <p className='slider-para3'>
                                Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind</p>
                            <button className='discover-btn'>Discover the formulation <span><AiOutlineArrowRight /></span></button>
                        </div>
                        <img src={img3} alt="" style={{ height: "400px", width: "50%" }} />
                    </div>




                </div>
                {/* Add more carousel items as needed */}
            </Slider>
        </div>
    );
};

const CustomPrevArrow = (props) => (
    <div className="custom-arrow custom-prev" onClick={props.onClick}>
        {/* You can customize the previous arrow */}
        &lt;
    </div>
);

const CustomNextArrow = (props) => (
    <div className="custom-arrow custom-next" onClick={props.onClick}>
        {/* You can customize the next arrow */}
        &gt;
    </div>
);

export default Carousel;
