import React, {useEffect, useState} from 'react';
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutVission from "./AboutVission";
import AboutStory from "./AboutStory";

const About = () => {
    return (
        <div style={{background:'#000', color:'#fff', padding:'5rem 1rem'}}>
            <AboutHero/>
            <AboutStory/>
            <AboutMission/>
            <AboutVission/>
        </div>
    );
};

export default About;
