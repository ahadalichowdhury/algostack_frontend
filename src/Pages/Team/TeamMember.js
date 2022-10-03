import React from "react";
import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import './TeamMember.css'

const TeamMember = (props) => {
  let {
    _id,
    Name,
    email,
    Position,
    image,
    facebook,
    linkedin,
    ProfessionDetails,
    PersonalDetails,
    Expertise,
    Comfortable,
    Familiar,
    Tools,
  } = props.member;

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (

    <Paper

      key={_id}

      sx={{
        py: 3,
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        maxWidth: 1200,
        flexGrow: 1,
        boxShadow: "0px 8px 8px  rgb(195, 202, 203)",
        backgroundImage: "fixed",
      }}
    >
      <Grid container spacing={3}>
        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: { xs: '100%', md: '35%' } }}>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <ButtonBase sx={{
              marginTop: "45px",
              width: { xs: '90%', md: '320px' },
              height: { xs: '100%', md: '350px' },
              // position: "relative",
               display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
              <div className="banner-img" >
                <Img sx={{ marginTop: { xs: '60px', md: '45px' }, borderRadius: "20px" }} alt="complex" src={image} />
              </div>
            </ButtonBase>
          </Grid>
          <Grid item>
            <Container>
              <Typography
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h2 className="title" >
                  <AccountCircleIcon className="icons-w" />
                  {Name}
                </h2>
                <p style={{ fontWeight: 500, fontFamily: "monospace" }}> {Position}</p>
              </Typography>
            </Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                gap: '15px'
              }}
            >
              <a style={{ color: "#fff" }} href={facebook}>
                <img style={{ width: "70px" }} src="https://img.icons8.com/3d-plastilina/100/000000/3d-plastilina-purple-square-facebook-logo.png" alt="icon" />
              </a>
              <a style={{ color: "#fff" }} href={email}>
                <img style={{ width: "80px" }} src="https://img.icons8.com/clouds/100/000000/new-post.png" alt="icon" />
              </a>
              <a style={{ color: "#fff" }} href={linkedin}>
                <img style={{ width: "65px" }} src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-linkedin-social-media-justicon-lineal-color-justicon.png" alt="icon" />
              </a>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container sx={{ marginTop: "30px" }}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Grid item sx={{ marginTop: "5%" }}>
                <div className="cards">
                  <h3 className='header-info'>
                    <CoPresentIcon className='icons' /> Personal Details:
                  </h3>
                  <p className="divs">{PersonalDetails}</p>
                </div>
                <div className="cards">
                  <h3 className='header-info'>
                    <CoPresentIcon className='icons' /> Personal Details: </h3>
                  <p className="divs"> {ProfessionDetails}</p>
                </div>
              </Grid>
              {/* buttons */}
              <Button
                sx={{
                  border: "3px solid #B5E8F0",
                  "border-radius": "50px",
                  height: "50px",
                  background: "white",
                  // boxShadow: "0px 4px 3px rgb(241, 158, 186)",
                  color: "rgb(74, 21, 107)",
                  fontWeight: "bold",
                  padding: "9px",
                  marginTop: "10px"
                }}
              >
                <RadioButtonUncheckedIcon
                  sx={{
                    color: "hsl(179, 51%, 56%)",
                    padding: "5px",
                    fontSize: "20px",
                  }}
                />
                Professional Skills
              </Button>
              {/* skils section */}
              <Container>
                <Typography
                  sx={{ display: "flex", flexDirection: "row" }}>
                  <h3 className="title">
                    <CropSquareIcon className="icons-w" /> Expertise:
                  </h3>
                  <p className="skills">{Expertise}</p>
                </Typography>
                <Typography
                  sx={{ display: "flex", flexDirection: "row", mt: "-38px" }}>
                  <h3 className="title">
                    <CropSquareIcon className="icons-w" /> Comfortable :
                  </h3>
                  <p className="skills">{Comfortable}</p>
                </Typography>
                <Typography
                  sx={{ display: "flex", flexDirection: "row", mt: "-38px" }} >
                  <h3 className="title">
                    <CropSquareIcon className="icons-w" /> Familiar :
                  </h3>
                  <p className="skills">{Familiar}</p>
                </Typography>
                <Typography
                  sx={{ display: "flex", flexDirection: "row", mt: "-38px" }}>
                  <h3 className="title">
                    <CropSquareIcon className="icons-w" /> Tools:
                  </h3>
                  <p className="skills">{Tools}</p>
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

    </Paper>
  );

};

export default TeamMember;
