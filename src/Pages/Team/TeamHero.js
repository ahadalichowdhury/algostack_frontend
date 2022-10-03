import React from 'react';
import banner from './../../Assets/Image/team.svg'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const TeamHero = () => {
    return (
        <div >
            <img data-aos="zoom-in" src={banner} alt="banner_image" style={{height:'70vh', width:'100%', marginTop:'5rem', padding:'1rem 0'}} />
        </div>
    );
};

export default TeamHero;
