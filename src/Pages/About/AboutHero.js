import React from 'react';
import { Button } from '@mui/material'
import { Link, NavLink } from "react-router-dom"
import '../../Assets/css/about.css'
import image from './../../Assets/Image/newAbout.svg'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const AboutHero = () => {
    return (
        <img data-aos="zoom-in"
            // data-aos-duration="1000"
            src={image} alt="banner_img" style={{ width: '100%', height: '70vh' }} />
    );
};

export default AboutHero;
