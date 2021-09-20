import { IconButton, TextField, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import "../theme/components/Banner.css";
const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <form method="POST">
          <Typography
            className="andika-font"
            fontSize="45px"
            fontWeight="900"
            variant="h3"
          >
            Get there. From here.
          </Typography>
          <p>
            Welcome to the place where success begins. Log in for savings. Ends
            Soon.
          </p>
          <br />
          <div>
            <TextField
              variant="outlined"
              fullWidth
              label="Review products"
              color="secondary"
            />
            <IconButton className="icon">
              <Search />
            </IconButton>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Banner;
