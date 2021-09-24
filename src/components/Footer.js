import { EmailOutlined } from "@mui/icons-material";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "../theme/components/Footer.css";
const Footer = ({ isDashboard }) => {
  return (
    <React.Fragment>
      <div className={isDashboard == true ? "kill-footer" : "footer"}>
        <Container>
          <Grid container>
            <Grid xs={12} lg={6}>
              <Typography
                variant="h4"
                className="heading2"
                fontWeight="700"
                color="white"
              >
                Quick Links
              </Typography>
              <ul className="ul">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">My reviews</a>
                </li>
                <li>
                  <a href="">Leaders Board</a>
                </li>
                <li>
                  <a href="">Profile</a>
                </li>
                <li>
                  <a href="">Logout</a>
                </li>
              </ul>
            </Grid>
            <Grid lg={6} xs={12} justifyContent="center">
              <Typography
                className="heading2"
                variant="h4"
                fontWeight="700"
                color="white"
              >
                Subscribe To Our News<span className="color-base">letter</span>
              </Typography>
              <p className="lead2">
                Don't worry we won't bore you with spam messages.
              </p>
              <form>
                <input
                  className="email"
                  type="text"
                  placeholder="example@gmail.com"
                />
                <Button className="btn" variant="contained">
                  Subscribe
                  <EmailOutlined className="icon" />
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
