import React from 'react';
import {Container, Grid} from '@mui/material'
import '../../Assets/css/about.css'
import TextAnimation from "react-text-animations";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const AboutVission = () => {
    return (
        <Container data-aos="fade-up">
            <Grid container className="about-vission" sx={{padding:'0 0 7rem 0',}} style={{fontFamily:'fantasy'}}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="about-vission-img">
                        <img alt="vission" src="https://cdn.pixabay.com/photo/2022/09/01/17/23/bangladesh-7425904_960_720.jpg" />
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/str.mahi/" style={{textDecoration:'none'}} className="about-vission-img-overlay">
                            <div className="about-vission-img-title">Mahinur Rahman Mahi</div>
                            <p className="about-vission-img-description">Managing Director &amp; Co-founder </p>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{pb:5}}>
                    <div className="about-vission-txt">
                        <TextAnimation.Slide animation={{
                            duration:1000,
                            delay:3000,
                            timingFunction:'ease-out',
                        }} id="textAnimation-vission" target="Vision" text={['Eyes', 'Observation', 'Vision']}>
                            Our Vision
                        </TextAnimation.Slide>
                        <p style={{height:'40vh', fontSize:'22px', padding:'.5rem', textAlign:'justify', marginBottom:'1rem'}}>Taking the motto "A dream to grow" AlgoStack-BD started journey in as an IT company in 2022. We have gathered a bunch of creative developers and programmers. We have been looking for starting such agency from years ago. Our vision is to produce products and launch in community that will enhance our customers satisfaction and reliability. So far, we are working remotely and have plan to setup a on-site workplace for our agency.
                        </p>
                    </div>
                </Grid>

            </Grid>
        </Container>
    );
};

export default AboutVission;
