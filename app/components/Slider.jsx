import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className='px-2 rounded-xl'>
                    <img src={image} className='rounded w-full' alt={`Screenshot ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;