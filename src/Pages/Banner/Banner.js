import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Banner = () => {
  return (
    <Box sx={{ marginTop: "2.55rem", background: "#030303" }}>
      <Grid
        container
        component={Container}
        rowSpacing={1}
        columns={12}
        sx={{ height: "100%", width: "100%" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: {
              lg: "1rem 0",
              md: "1rem 0",
              sm: "10rem 0rem",
              xs: "10rem 0rem",
            },
          }}
        >
          <Typography
            variant="h3"
            data-aos="flip-right"
            sx={{
              color: "#fff",
              fontFamily: "Secular One",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              letterSpacing: "4px",
              wordSpacing: "10px",
            }}
          >
            BUILD YOUR <Box sx={{ ml: 3, color: "#FFA500" }}>DREAM</Box>
            <Box sx={{ color: "#fff", ml: 3, display: "inline" }}>
              <Typewriter
                // style={{ color: "#FFA500" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<span style="margin-top: 1rem"> With <span style="color: #fff;">AlgoStackBD</span></span>'
                    )
                    .changeDeleteSpeed(100)
                    // .deleteAll()
                    .start();
                }}
              />
            </Box>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontFamily: "Secular One",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              letterSpacing: "2px",
              wordSpacing: "5px",
              mt: 2,
              fontWeight: 400,
            }}
          >
            -A DRAM TO GROW
          </Typography>
        </Grid>
        {/* logo code */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box>
            <Box
              className="heart"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap:'30px 0',
                padding: { md: "0 1rem", lg: "0 1rem", xs: 0, sm: 0 },
                height: "80vh",
                width: { sm: "100%", xs: "100%", md: "90%", lg: "90%" },
                margin: "0 auto",
              }}
            >
              {/* upper part */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: ".5rem",
                  height: "100%",
                  width: "100%",
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >
                <Box
                  data-aos="fade-down-right"
                  sx={{
                    width: "40%",
                    height: { xs: "100%", sm: "100%", md: "55%", lg: "55%" },
                    ml: { xs: 2, sm: 3, md: 10, lg: 12 },
                    mt: { xs: 2, sm: 2 },
                    borderRadius: "7px",
                    backgroundImage:
                      "linear-gradient(to right bottom, #28fbd6, #26fbd5, #24fad5, #21E1E1, #21E1E1)",
                  }}
                >
                  <span style={{ visibility: "hidden" }}>a</span>
                </Box>
                <Box
                  data-aos="fade-down-left"
                  data-aos-duration="1000"
                  sx={{
                    width: "25%",
                    height: { xs: "80%", sm: "80%", md: "35%", lg: "35%" },
                    mr: { xs: 2, sm: 3, md: 10, lg: 12 },
                    mt: 12,
                    borderRadius: "7px",
                    backgroundImage:
                      "linear-gradient(to right bottom, #24fad5, #21E1E1, #21E1E1)",
                  }}
                >
                  <span style={{ visibility: "hidden" }}>b</span>
                </Box>
              </Box>
              {/* lower part */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: ".5rem",
                  height: "100%",
                  width: "95%",
                  mt: { xs: "1rem", sm: "1rem", md: "-8.5rem", lg: "-8.5rem" },
                  overflow: "hidden",
                }}
              >
                <Box
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                  sx={{
                    width: "26%",
                    height: { xs: "60%", sm: "60%", md: "35%", lg: "35%" },
                    mb: { xs: 18, sm: 18, md: 16, lg: 16 },
                    borderRadius: "7px",
                    backgroundImage:
                      "linear-gradient(to right bottom, #24fad5, #24fad5, #21E1E1, #21E1E1)",
                  }}
                >
                  <span style={{ visibility: "hidden" }}>c</span>
                </Box>
                <Box
                  data-aos="fade-up-left"
                  sx={{
                    width: "40%",
                    height: { xs: "100%", sm: "100%", md: "65%", lg: "65%" },
                    mb: { xs: 2, sm: 2 },
                    borderRadius: "7px",
                    // transform: "rotate(5deg)",
                    background: "#21E1E1",
                  }}
                >
                  <span style={{ visibility: "hidden" }}>d</span>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
