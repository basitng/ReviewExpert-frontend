import { Button, Typography } from "@mui/material";
import React from "react";
import "../theme/components/ReviewMyProduct.css";
const ReviewMyProduct = () => {
  return (
    <React.Fragment>
      <div className="container2">
        <div className="block1">
          <Typography className="txt1" fontWeight="700">
            Start getting feedbacks for You <span>Product Now</span>
          </Typography>
          <p className="lead">
            Hi signup for a brand account to review all your awesome products in
            this platform for free.
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#615cf2",
            }}
            size="large"
          >
            SIGN UP TODAY
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReviewMyProduct;
