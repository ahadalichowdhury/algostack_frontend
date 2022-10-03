import React from 'react';
import {Container, Grid} from "@mui/material";
import Typewriter from 'typewriter-effect';
import logo from "../../Assets/1.png"

const AboutStory = () => {
    return (
        <Container className="about-story-header">
            <h2 style={{marginBottom:'3rem', paddingTop:'2rem', fontSize:'24px'}}>OUR STORY</h2>
            <hr></hr>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                    <div>
                        <h1 style={{textAlign:'left', lineHeight:'40px', fontWeight:400}}>
                            We are building cross platform
                            <Typewriter
                                onInit={(writer)=>{
                                    writer.typeString(" mobile app & web applications").start();
                                }}/>
                           </h1>
                        <div className={"about-story-image"} style={{marginTop:'3rem'}}>
                            <img alt="algostackBD" src={logo}/>
                            <p style={{fontSize:'18px', paddingRight:'40px', textAlign:'left'}}>A living place for curicity and the heart of a creative community</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6} >
                    <div style={{textAlign:'left', paddingLeft:'2rem',fontSize:'18px'}}>
                        <div className="about-story-01" >
                            <h1>01. <span style={{marginLeft:5}}>Monitoring</span> </h1>
                            <p>We always monitoring the applications even after handing over the project to the client does not face any problem</p>
                        </div>
                        <div className="about-story-01" style={{marginTop:'2rem'}}>
                            <h1>02. Segmentation</h1>
                            <p>We complete projects through separate teams as per the needs of the clients</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutStory;
