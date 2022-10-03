import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import web from '../../Utils/web_image.png'
import mobile from '../../Utils/mobile.png'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Services = () => {
  return (
    <Box sx={{ paddingTop: "2.5rem", background: "#030303", height: "100%", color:'#fff' }} >
        <Box component={Container} sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'30rem', flexDirection:'column'}}>
            <Typography variant="h3" style={{wordSpacing:'20px', color:'#FFA500',}}>
                SERVICES <span style={{borderBottom: '3px solid green', paddingBottom:'5px'}}>&amp;</span> PRODUCTS
            </Typography>
            <Typography variant="h5" style={{marginTop:'3rem', wordSpacing:'5px'}} sx={{marginLeft:{xs:0,sm:0,md:'20rem', lg:'20rem'}}}>
                -CUSTOMER'S SATISFACTION IS OUR MOTTO 
            </Typography>
        </Box>
        <Box data-aos="fade-up" component={Container} style={{marginTop:'-5rem'}} sx={{ flexGrow: 1,height: '100%', pb:'4rem'}}>
            <Grid container spacing={4} >
                <Grid item xs={12} sm={12} md={4}>
                    <Box style={{width:'100%'}}>
                       <img src={web} style={{width:'100%',}} alt="web_image"></img>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} >
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'100%', wordSpacing:'4px'}}>
                        <Typography variant='h5' style={{fontWeight:500,}}>
                            WE PROVIDE RESPOSIVE WEB APPLICATION SERVICES
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{py:10}}>
                <Box>_____________________<span style={{visibility:'hidden'}}>&amp;</span>____________________</Box>
                <Box style={{marginTop:'-0.6rem',}}><span style={{visibility:'hidden'}}>_____________________</span><span style={{padding:'0 15px', background:'#000'}}>&amp;</span><span style={{visibility:'hidden'}}>_____________________</span></Box>
            </Box>

            <Grid container spacing={4} data-aos="fade-up">
                <Grid item xs={12} sm={12} md={7}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'100%', wordSpacing:'4px'}}>
                        <Typography variant='h5' style={{fontWeight:500}}>
                            BUILD YOUR  CHARMING MOBILE APPLICATIONS 
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={5} >
                    <Box style={{width:'100%'}}>
                       <img src={mobile} style={{width:'100%',}} alt="mobile_image"></img>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default Services