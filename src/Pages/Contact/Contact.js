import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Contact = () => {
  const form = useRef();
  function sendEmail(e) {
    emailjs
      .sendForm(
        "service_gireryy",
        "template_8dmsp0k",
        form.current,
        "n-O073EYxywhK54xE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    e.preventDefault();
  }
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <Box
      component={Container}
      sx={{ marginTop: "2.7rem", mt: "4rem", background: "#fff", padding: '2rem 0' }}
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <Typography
        variant="h5"
        sx={{ color: "#000", textTransform: "upperCase" }}
      >
        Make
        <span style={{ color: "#F7A000" }}> inquiry</span>
      </Typography>
      <form onSubmit={sendEmail} ref={form}>
        <Grid container spacing={2} column={12}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              required
              autoComplete="off"
              id="outlined-multiline-flexible"
              label="Enter Your Name Here"
              name="name"
              sx={{ width: "90%", mt: 5 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              required
              autoComplete="off"
              id="outlined-multiline-flexible"
              label="Enter Email Address"
              name="email"
              sx={{ width: "90%", mt: 5 }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} column={12}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              autoComplete="off"
              id="outlined-multiline-flexible"
              label="Your Phone Number"
              name="phone"
              sx={{ width: "90%", mt: 5 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              required
              autoComplete="off"
              id="outlined-multiline-flexible"
              label="Write Subject Here"
              name="subject"
              sx={{ width: "90%", mt: 5 }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} column={12}>
          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: 6 }}>
            <Grid
              container
              spacing={2}
              column={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl>
                  <FormLabel
                    id="demo-radio-time-label"
                    sx={{ mb: 2, color: "#000", fontWeight: "bolder" }}
                  >
                    Set Your Project Time Goal
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-time-label"
                    defaultValue="Less than a month"
                    name="time"
                  >
                    <FormControlLabel
                      value="Less than a week"
                      control={<Radio />}
                      label="Less than one week"
                    />
                    <FormControlLabel
                      value="Less than two weeks"
                      control={<Radio />}
                      label="Less than two weeks"
                    />
                    <FormControlLabel
                      value="Less than a month"
                      control={<Radio />}
                      label="Less than one month"
                    />
                    <FormControlLabel
                      value="Less than six months"
                      control={<Radio />}
                      label="Less than six months"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormLabel
                  id="demo-radio-subject-label"
                  sx={{ mb: 2, color: "#000", fontWeight: "bolder" }}
                >
                  Set Your Budget
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-subject-label"
                  defaultValue="Less than 15K BDT"
                  name="budget"
                  sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <FormControlLabel
                    value="Less than 15K BDT"
                    control={<Radio />}
                    label="<= 15K BDT"
                  />
                  <FormControlLabel
                    value="Less than 30K BDT"
                    control={<Radio />}
                    label=">=16K to <=30K BDT"
                  />
                  <FormControlLabel
                    value="Less than 45K BDT"
                    control={<Radio />}
                    label=">=31K to <=45K BDT"
                  />
                  <FormControlLabel
                    value="Greater than 45K BDT"
                    control={<Radio />}
                    label=">= 46K BDT"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              required
              autoComplete="off"
              id="outlined-multiline-flexible"
              label="Write Your Requirement/Query Here"
              multiline
              rows={8}
              name="message"
              sx={{ width: "90%", mt: 5 }}
            />
          </Grid>
        </Grid>
        <Box sx={{ py: 2, mt: 2 }}>
          <Button
            sx={{ marginLeft: { md: "2rem", lg: "14rem", background: '#030303', color: '#fff' } }}
            type="submit"
            color="success"
            variant="contained"
            onClick={handleClick("Your email has been sent")}
          >
            Send Message
          </Button>
          <Snackbar
            key={messageInfo ? messageInfo.key : undefined}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            TransitionProps={{ onExited: handleExited }}
            message={messageInfo ? messageInfo.message : undefined}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            }
          />
        </Box>
      </form>
    </Box>
  );
};

export default Contact;
