import { Star, StarHalfOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

// Style
import "../theme/components/Card.css";

const ProductCard = ({ image, title, rating, company, rateTotal }) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-image">
          <img src={image} />
        </div>
        <div className="card-content">
          <Typography
            noWrap
            fontSize="16px"
            className="andika-font"
            fontWeight="700"
          >
            {title}
          </Typography>
          <Typography noWrap fontSize="15px" color="InfoText" fontWeight="200">
            {company}
          </Typography>
          <div className="rating">
            <span>{rating}</span>
            <Star className="icon" />
            <Star className="icon" />
            <Star className="icon" />
            <Star className="icon" />
            <StarHalfOutlined className="icon" />
            <span className="span2">({rateTotal})</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
