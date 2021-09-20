import { Typography } from "@mui/material";
import React from "react";

const Header = ({ heading, subHeading }) => {
  return (
    <React.Fragment>
      <div className="header">
        <Typography className="heading1" fontWeight="700">
          {heading}
        </Typography>
        <Typography fontSize="18px" fontWeight="500">
          {subHeading}
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default Header;
