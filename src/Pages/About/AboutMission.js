import React from 'react';
import {Container, Grid} from '@mui/material'
import '../../Assets/css/about.css'
import TextAnimation from "react-text-animations";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const AboutMission = () => {
    return (
        <Container data-aos="fade-up">
            <Grid container className="about-mission" style={{fontFamily:'fantasy'}} >
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="about-mission-txt">
                        <TextAnimation.Slide animation={{
                            duration:1000,
                            delay:3000,
                            timingFunction:'ease-out',
                        }} id="textAnimation-mission" target="Mission" text={['Assignment', 'Journey', 'Goal', 'Mission']}>
                            Our Mission
                        </TextAnimation.Slide>
                        <p style={{height:'40vh', fontSize:'22px', padding:'.5rem', textAlign:'justify', marginBottom:'1rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            AlgoStack-BD  started in 2022 to empower small businesses. It’s a team of designers, engineers, marketers, and support engineers aimed to craft and develop products and solutions that solve real business problems and increase the revenue of thousands of small businesses.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="about-mission-img">
                    <img alt="mission" src="https://cdn.pixabay.com/photo/2022/09/01/17/18/algostackbd-7425891_960_720.jpg" />
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/saifuddin.shrabon.338/" style={{textDecoration:'none'}} className="about-mission-img-overlay">
                            <div className="about-mission-img-title">MD: Saif Uddin Shrabon</div>
                            <p className="about-mission-img-description">CEO and Founder</p>
                        </a>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutMission;
