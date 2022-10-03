import React, {useState, useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import axios from 'axios';
import {Link} from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();


const Team = () => {
    let url = "/memberDetails"
    useEffect(()=>{
        getMembers();
    }, [])
    const [members, setMembers]= useState([])


    const getMembers = async () =>{
        try{
            const res = await axios.get("http://localhost:5000/api/v1/memberdetails")
            setMembers(res.data.data)

        }catch(err){
            console.log(err.message)
        }
    }
    let member= members.map((member, i)=>{
            return (
                <Link to={`${url}/${member._id}`} key={i} 
                data-aos-anchor-placement="center-bottom">
                    <Grid item xs={12} sm={12} md={6} lg={4} >
                        <div className="team-card" style={{borderRadius:'10px'}}>
                            <div className="team-image">
                                <img src={member.image} style={{height:'100%'}} alt="members_image"/>
                            </div>
                            <div className="team-details">
                                <div className="team-center">
                                    <h1>{member.Name}<br/><span>{member.Position}</span></h1>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Link>
            )
        })
    return (
        <Container sx={{pt:8}} >
            <h1 className="about-team-header">OUR VALUABLE TEAM MEMBERS</h1>
            <Grid container className="team-card-container" data-aos="zoom-in">
                {member}
            </Grid>
        </Container>
    );
};

export default Team;
