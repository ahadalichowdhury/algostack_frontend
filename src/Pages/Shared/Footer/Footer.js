import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedIn from "@mui/icons-material/LinkedIn";

export default function Footer() {

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "black",height:'100%' }} className="horizontal">
      <Typography
        variant="h4"
        sx={{
            color: "white",
            backgroundColor: "black",
            marginLeft: "60px",
            marginBottom: "2rem",
            padding:{md:'2rem 5rem 0', xs:'2rem 0', sm:'2rem 0'},
            display: "flex",
            justifyContent: "flex-start",
        }}
      >
        AlgoStack-BD
      </Typography>
    <Box sx={{padding:{md:'0 3rem'}}}>
        <Grid
            container
            spacing={2}
            sx={{ marginLeft: "60px" }}
        >
            {/* address */}
            <Grid item xs={12} md={4} sx={{ color: "white", textAlign: "left" }}>
            <Typography variant="body1" sx={{padding:'5px',margin:'5px', display:'flex',alignItems:'center'}}> 
                <HomeIcon sx={{mr:1}}/> 
                <Box style={{color:"#fff", textDecoration:"none"}} > Sylhet | Currently Remote</Box>
            </Typography>
            <Typography variant="body1" sx={{padding:'5px',margin:'5px', display:'flex',alignItems:'center'}}> 
                <EmailIcon sx={{mr:1}}/> 
                <Box style={{color:"#fff", textDecoration:"none"}} > Email:  <a style={{textDecoration:'none', color:'#fff'}} href="mailto:algostackbd@gmail.com">algostackbd@gmail.com</a></Box>
            </Typography>
            <Typography variant="body1" sx={{padding:'5px',margin:'5px', display:'flex',alignItems:'center'}}> 
                <LocalPhoneIcon sx={{mr:1}}/> 
                <Box style={{color:"#fff", textDecoration:"none"}} > Phone: <a style={{textDecoration:'none', color:'#fff'}} href="tel:+880 1601-412194">+880 1601-412194</a></Box>
            </Typography>
            <Typography variant="body1" sx={{padding:'5px',margin:'5px', display:'flex',alignItems:'center'}}> 
                <WhatsAppIcon sx={{mr:1}}/> 
                <Box style={{color:"#fff", textDecoration:"none"}} > Whatsapp: <a style={{textDecoration:'none', color:'#fff'}} href="tel:+880 1601-412194">+880 1601-412194</a></Box>
            </Typography>
            </Grid>
            {/* Links */}
            <Grid item xs={12} md={4} sx={{ color: "white", textAlign: "left" }}>
            <Typography variant="h6" sx={{padding:'5px',margin:'5px', fontWeight:800}}>
                 QUICK LINKS
            </Typography>
            {/* <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
                <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} > HOME PAGE</NavLink>
            </Typography> */}
            <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
                <NavLink to="/about" style={{color:"#fff", textDecoration:"none"}} > ABOUT US</NavLink>
            </Typography>
            <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
                <NavLink to="/team" style={{color:"#fff", textDecoration:"none"}} > OUR TEAM</NavLink>
            </Typography>
            <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
                <NavLink to="/contact" style={{color:"#fff", textDecoration:"none"}} > CONTACT US</NavLink>
            </Typography>
            </Grid>
            <Grid
            item
            xs={12}
            md={4}
            sx={{ color: "white", typography: "body1", textAlign: "left" }}
            >
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'start', flexDirection:'column'}}>
              <Typography variant="h6" sx={{padding:'5px',margin:'5px', fontWeight:800}}>
                  FOLLOW US
              </Typography>
              <Box sx={{padding:'0 5px', display:'flex', justifyContent:'center'}}>
                <a style={{color:'#fff'}} href="https://www.facebook.com/algostackbd" target="blank"><img style={{width:'100px'}} src="https://img.icons8.com/clouds/100/000000/facebook-new.png" alt="icon"/></a>
                <a style={{color:'#fff'}} href="https://www.linkedin.com/company/algostack-bd/" target="blank"><img style={{width:'100px'}} src="https://img.icons8.com/clouds/100/000000/linkedin.png" alt="icon"/></a>
                <a style={{color:'#fff'}} href="https://youtube.com/channel/UCcK0AHrPyEYNGlNIliO6jrQ" target="blank"><img style={{width:'100px'}} src="https://img.icons8.com/clouds/100/000000/youtube-play.png" alt="icon"/></a>
              </Box>
            </Box>
            </Grid>
        </Grid>
        <Typography
        sx={{
          color: "gray",
          padding:{ xs:'2rem', sm:'2rem',md:'1.5rem 5.3rem'},
          display: "flex",
        }}
      >
        © 2022 AlgoStack-BD, All Rights Reserved
      </Typography>
    </Box>
      
    </Box>
  );
}